This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# jcvolpe.me
A portfolio website. 
In-progress: A basic content mangement system so I can easily update with my latest work.
## Overview
#### Frameworks
- [Next.js](https://nextjs.org/) (serverless React, SSR, SSG, etc.) 
  - Highly optimized & free directory routing :D
#### Hosting
- AWS Amplify 
  - easy CI/CD setup with github repo
  - Comes with [tutorial](https://docs.aws.amazon.com/amplify/latest/userguide/server-side-rendering-amplify.html) for Next.js

#### Authentication approach
- SAML 2.0 authentication with AWS SSO
  - Good for my use case: very few users (1, me), authenticated users have high permissions (can modify contents of page)
  - Easy to login, don't have to keep entering credentials & highly secure
- More SAML 2.0 info
  - https://docs.aws.amazon.com/singlesignon/latest/userguide/appproperties.html
  - https://developers.onelogin.com/saml

#### Authentication framework (quite frankly a must)
- [NextAuth.js](https://next-auth.js.org/)
  - Easily integrated with next.js ([Unlike passport](https://todayilearned.io/til/nextjs-with-passport-oauth-cookie-sessions))
  - I found a NextAuth.js + SAML example!!! https://github.com/Jenyus-Org/next-auth-saml Ty :D

## Challenges
### Challenge: How I made SAML auth work locally
SAML needs `https://`. Getting this to work on localhost took some troubleshooting.
- Set up ‘localhost’ app in AWS SSO
- Store environment variables in .env.local (sso login/logout urls, assert endpoint, entity id, certificates, etc.)
- Create key and FULLCHAIN cert for localhost, using mkcert: 
  - https://github.com/FiloSottile/mkcert
  - https://github.com/FiloSottile/mkcert/issues/76#issuecomment-546054007
- Create server.js file in root, and configure server with private key and FULLCHAIN certificate stored locally.
```
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(
    dev
      ? {
          key: fs.readFileSync("./certs/localhost-key.pem"),
          cert: fs.readFileSync("./certs/localhost-fullchain.pem"),
        }
      : {},
    (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }
  ).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Server started");
  });
});
```



## Setting up locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
