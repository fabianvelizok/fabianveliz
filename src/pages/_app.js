import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import GoogleTagManager from 'Components/atoms/GoogleTagManager/GoogleTagManager';
import 'Styles/base/base.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />

      <GoogleTagManager />
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
