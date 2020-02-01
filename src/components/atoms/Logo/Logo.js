import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Logo.scss';

const Logo = props => {
  const { className, ...rest } = props;

  const classes = classNames(['logo', className]);

  return (
    <a href="/" className={classes} {...pickHTMLProps(rest)}>
      <span className="logo__caret">{'<'}</span>
      <span className="logo__name">FV </span>
      <span className="logo__caret">{'/>'}</span>
    </a>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: undefined,
};

export default Logo;
