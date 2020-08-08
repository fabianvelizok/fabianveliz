import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from 'Components/atoms/Avatar/Avatar';
import Container from 'Components/atoms/Container/Container';
import SocialLinks from 'Components/atoms/SocialLinks/SocialLinks';
import Pulse from 'Components/atoms/Pulse/Pulse';

import './Hero.scss';

const particlesParams = {
  particles: {
    number: {
      value: 72,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#e68518',
    },
    shape: {
      type: 'star',
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
  },
};

const Hero = props => {
  const { className, ...rest } = props;

  const classes = classNames(['hero', className]);

  return (
    <div className={classes} id="#hero" {...pickHTMLProps(rest)}>
      <Particles className="hero__particles" params={particlesParams} />

      <Container className="hero__container">
        <Avatar alt="Me" className="hero__photo" src="https://avatars3.githubusercontent.com/u/5731909?s=460&v=4" />

        <div className="hero__about">
          <div className="hero__about-information">
            <strong>About me</strong>
            <p>
              My name is Fabián Veliz and I am a Front-end developer with about 6 years of experience developing web
              applications. I have been working on the front-end side using frameworks and libraries like React,
              Angular, Vue, etc. I am a self-taught person although I resumed my university studies and I am currently
              coursing the system engineer career.
            </p>

            <p>
              I am a mentor. I helped coworkers to improve their soft and hard skills in order to grow and I am
              currently training to be a gatekeeper.
            </p>

            <p>Do you want to know a little bit more?</p>
          </div>
        </div>

        <Pulse className="hero__talk">Let's talk</Pulse>

        <SocialLinks />
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
