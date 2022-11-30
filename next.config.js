/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "external-preview.redd.it", "www.maxpixel.net", "platform-lookaside.fbsbx.com"]
  },
  experimental: {
    appDir: true
  }
}
