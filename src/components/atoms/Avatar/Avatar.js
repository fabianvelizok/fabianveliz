import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Avatar.scss';

const Avatar = props => {
  const { alt, className, src, ...rest } = props;

  const classes = classNames(['avatar', className]);

  return <img alt={alt} className={classes} src={src} {...pickHTMLProps(rest)} />;
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: undefined,
};

export default Avatar;
