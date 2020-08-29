import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from 'Components/atoms/Avatar/Avatar';
import Container from 'Components/atoms/Container/Container';
import Particles from 'Components/atoms/Particles/Particles';
import Pulse from 'Components/atoms/Pulse/Pulse';
import RichText from 'Components/atoms/RichText/RichText';
import SocialLinks from 'Components/atoms/SocialLinks/SocialLinks';

import './Hero.scss';

const Hero = props => {
  const { avatar, className, links, profile, ...rest } = props;

  const classes = classNames(['hero', className]);

  return (
    <div className={classes} id="#hero" {...pickHTMLProps(rest)}>
      <Particles />

      <Container className="hero__container">
        <Avatar alt="Me" className="hero__photo" src={avatar} />

        <div className="hero__about">
          <div className="hero__about-information">
            <strong>About me</strong>

            <RichText content={profile} />
          </div>
        </div>

        <Pulse className="hero__talk">Let's talk</Pulse>

        <SocialLinks links={links} />
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

Hero.defaultProps = {
  className: undefined,
};

export default Hero;
