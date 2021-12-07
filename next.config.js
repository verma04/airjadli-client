const path = require('path');
const withFonts = require('next-fonts');
const dev = process.env.NODE_ENV !== 'production';
module.exports = withFonts({
    env: {
        url: dev ? 'https://airjaldi.fra1.digitaloceanspaces.com' : 'https://airjaldi.fra1.digitaloceanspaces.com'
      },
  
  webpack: config => {

    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
   
    loader: 'imgix',
    path: '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
 


 
 
})