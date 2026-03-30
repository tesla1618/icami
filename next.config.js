// next.config.js
module.exports = {
  allowedDevOrigins: ["192.168.0.113"], // this is my local IP address, and I have no problem with it being public. You can even publish it to a tech news website calling me a "dumbass".
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.icami.net",
        pathname: "/**",
      },
    ],
  },
};
