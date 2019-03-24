import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Header from 'Components/organisms/Header/Header';
import Footer from 'Components/organisms/Footer/Footer';

import './Main.scss';

const Main = props => {
  const { className, children, ...rest } = props;

  const classes = classNames(['main', className]);

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      {/* TODO: Load fonts locally or using javascript */}
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

      <Header />

      <main className="main__content">{children}</main>

      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

Main.defaultProps = {
  children: undefined
};

export default Main;
