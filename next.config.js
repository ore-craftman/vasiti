/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'cloudflare-ipfs.com',
      'picsum.photos',
      'randomuser.me',
      'res.cloudinary.com',
    ],
  },
}
