import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import React from 'react';

import './Particles.scss';

const defaultConfig = {
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

const ParticlesContainer = props => {
  const { className, config, ...rest } = props;

  const classes = classNames(['particles', className]);

  return <Particles className={classes} params={config || defaultConfig} {...pickHTMLProps(rest)} />;
};

ParticlesContainer.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
};

ParticlesContainer.defaultProps = {
  config: undefined,
  className: undefined,
};

export default ParticlesContainer;
