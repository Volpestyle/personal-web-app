/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SSO_START_URL: "https://d-9a67104eb1.awsapps.com/start",
    SSO_ENTRY_POINT:
      "https://portal.sso.us-east-2.amazonaws.com/saml/assertion/ODQyNDM0ODI5MDEyX2lucy1mYWRmYmQ2ZjkyZmQyNTNi",
    SSO_EXIT_POINT:
      "https://portal.sso.us-east-2.amazonaws.com/saml/logout/ODQyNDM0ODI5MDEyX2lucy1mYWRmYmQ2ZjkyZmQyNTNi",
    SSO_ACCOUNT_ID: "842434829012",
  },
};
