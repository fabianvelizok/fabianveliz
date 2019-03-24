import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Hero.scss';

const Hero = props => {
  const { className, ...rest } = props;

  const classes = classNames(['hero', className]);

  return (
    <div className={classes} id="#hero" {...pickHTMLProps(rest)}>
      <p className="hero__welcome">
        <span>
          Hi! I am currently working on my website. BTW, thanks for visiting it{' '}
        </span>
        <span role="img" aria-label="smile">
          &#x1F600;
        </span>
        <br />
        I will have updates soon!
      </p>
      <p className="hero__thanks">Thanks!</p>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

Hero.defaultProps = {
  className: undefined
};

export default Hero;
