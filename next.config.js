/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const webpack = require("webpack");
console.log(webpack.version); // 5.21.2
module.exports = {
  webpack: function (config, options) {
    console.log(options.webpack.version); // 4.44.1
    config.experiments = {};
    return config;
  },
};


