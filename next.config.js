/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images:{
    remotePatterns:[
      {hostname: 'firebasestorage.googleapis.com'}
    ]
  }
}

module.exports = nextConfig
