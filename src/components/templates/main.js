import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Main = props => {
  const { children } = props;

  return (
    <Fragment>
      {/* TODO: Load fonts locally or by javascript */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
      </Head>

      <main>{children}</main>
    </Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

Main.defaultProps = {
  children: undefined
};

export default Main;
