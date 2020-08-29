import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './AnimationFadeInLeft.scss';

const AnimationFadeInLeft = props => {
  const { className, children, delay, ...rest } = props;

  const classes = classNames(['animation-fade-in-left', className]);
  const style = delay ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div className={classes} style={style} {...pickHTMLProps(rest)}>
      {children}
    </div>
  );
};

AnimationFadeInLeft.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  delay: PropTypes.number
};

AnimationFadeInLeft.defaultProps = {
  children: undefined,
  className: undefined,
  delay: undefined
};

export default AnimationFadeInLeft;
