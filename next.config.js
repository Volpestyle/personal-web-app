/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SSO_ENTRY_POINT: process.env.SSO_ENTRY_POINT,
    SSO_EXIT_POINT: process.env.SSO_EXIT_POINT,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};
