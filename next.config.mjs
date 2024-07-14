/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inicio',
        permanent: false // Set to true if you want this redirect to be cached by search engines
      }
    ]
  }
}

export default nextConfig
