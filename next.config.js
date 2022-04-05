/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SSO_ENTRY_POINT: process.env.SSO_ENTRY_POINT,
    SSO_EXIT_POINT: process.env.SSO_EXIT_POINT,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SP_ASSERT_ENDPOINT: process.env.SP_ASSERT_ENDPOINT,
    SP_ENTITY_ID: process.env.SP_ENTITY_ID,
    SP_PK_FILENAME: process.env.SP_PK_FILENAME,
    SP_CERT: process.env.SP_CERT,
    SSO_CERT: process.env.SSO_CERT,
    TEMP_CREDENTIALS_ROLE_ARN: process.env.TEMP_CREDENTIALS_ROLE_ARN,
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    });

    return config;
  },
};
