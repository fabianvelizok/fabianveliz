const withSass = require('@zeit/next-sass');

const config = {
  env: {
    ID_GOOGLE_TAG_MANAGER: process.env.ID_GOOGLE_TAG_MANAGER,
  },
};

module.exports = withSass(config);
