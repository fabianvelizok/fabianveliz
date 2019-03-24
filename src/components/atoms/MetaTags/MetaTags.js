import Head from 'next/head';
import React from 'react';

const MetaTags = props => {
  const { title } = props;

  return (
    <Head>
      <title>{title} | Fabián Veliz</title>
    </Head>
  );
};

export default MetaTags;
