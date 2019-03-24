import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'Components/atoms/Container/Container';
import Hero from 'Components/atoms/Hero/Hero';
import Main from 'Components/templates/Main/Main';
import MetaTags from 'Components/atoms/MetaTags/MetaTags';
import SocialLinks from 'Components/atoms/SocialLinks/SocialLinks';

import 'Styles/pages/home.scss';

const Home = props => {
  const { className, ...rest } = props;

  const classes = classNames(['home', className]);

  return (
    <Main className={classes} {...pickHTMLProps(rest)}>
      <MetaTags title="Home" />

      <Container>
        <Hero className="home__hero" />

        <SocialLinks />
      </Container>
    </Main>
  );
};

Home.propTypes = {
  className: PropTypes.string
};

Home.defaultProps = {
  className: undefined
};

export default Home;
