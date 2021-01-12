import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";

import './AnimationFadeInLeft.scss';

// TODO: Refactor to hoc
const AnimationFadeInLeft = props => {
  const { animateInViewport, className, children, delay, ...rest } = props;

  const style = delay ? { animationDelay: `${delay}s` } : undefined;
  const Wrapper = animateInViewport ? VisibilitySensor : "div";
  const [isInViewport, setIsInViewport] = useState(false);
  const classes = classNames(className, {
    'waiting-animation': animateInViewport && !isInViewport,
    'animation-fade-in-left': animateInViewport ? isInViewport : true
  });
  

  const onChange = (visible) => {
    if (visible) {
      setIsInViewport(true);
    }
  };

  return (
    <div className={classes} style={style} {...pickHTMLProps(rest)}>
      <Wrapper onChange={(visible) => onChange(visible)} partialVisibility={animateInViewport ? true : undefined}>
        {children}
      </Wrapper>
    </div>
  );
};

AnimationFadeInLeft.propTypes = {
  animateInViewport: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  delay: PropTypes.number
};

AnimationFadeInLeft.defaultProps = {
  animateInViewport: false,
  children: undefined,
  className: undefined,
  delay: undefined
};

export default AnimationFadeInLeft;
