import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const MetaTags = props => {
  const { children, title } = props;

  // TODO: Add SEO tags.
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />

      <title>{title} | Fabián Veliz</title>

      <meta name="description" content="Fabián Horacio Veliz' personal website" />

      {children}
    </Head>
  );
};

MetaTags.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

MetaTags.defaultProps = {
  children: undefined,
  title: undefined,
};

export default MetaTags;
