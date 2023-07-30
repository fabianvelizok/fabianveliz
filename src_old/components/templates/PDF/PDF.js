import React from 'react';
import PropTypes from 'prop-types';

import { HOST } from "Utils/constants";

const PDF = ({ children }) => (
  <html style={{fontSize: '10px'}}>
    <head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href={`${HOST}/static/resume.css`} />
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
