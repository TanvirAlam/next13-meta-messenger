/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "external-preview.redd.it"]
  },
  experimental: {
    appDir: true
  }
}
