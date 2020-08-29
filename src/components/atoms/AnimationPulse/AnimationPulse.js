import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './AnimationPulse.scss';

const AnimationPulse = props => {
  const { className, children, ...rest } = props;

  const classes = classNames(['animation-pulse', className]);

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      {children}
    </div>
  );
};

AnimationPulse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

AnimationPulse.defaultProps = {
  children: undefined,
  className: undefined,
};

export default AnimationPulse;
