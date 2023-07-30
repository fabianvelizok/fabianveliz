import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultConfig } from "./Particles.contants";

import './Particles.scss';

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
