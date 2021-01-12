import React from 'react';
import PropTypes from 'prop-types';
// TODO: Move to env vars
const isDevelopment = process.env.NODE_ENV === "development";
const host = isDevelopment ? "http://localhost:3000" : "https://fabianveliz.com";

const PDF = ({ children }) => (
  <html style={{fontSize: '10px'}}>
    <head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link rel="stylesheet" href={`${host}/static/cv.css`} />
    </head>
    <body>
      {children}
    </body>
  </html>
);

PDF.propTypes = {
  children: PropTypes.node,
};

export default PDF;
