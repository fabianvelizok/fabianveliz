import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from 'Components/atoms/Hero/Hero';
import Main from 'Components/templates/Main/Main';
import MetaTags from 'Components/atoms/MetaTags/MetaTags';

import './index.scss';
// import '../_document.scss';

const Home = props => {
  const { className, ...rest } = props;

  const classes = classNames(['home', className]);

  return (
    <Main className={classes} {...pickHTMLProps(rest)}>
      <MetaTags title="Home" />

      <Hero className="home__hero" />

      {/* TODO: Remove temporal div */}
      <div
        style={{
          padding: '3rem',
          backgroundColor: '#347474',
          textAlign: 'center',
        }}
      >
        This site is under construction.
        <br />
        Updates are coming soon!
      </div>
    </Main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: undefined,
};

export default Home;
