import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Container.scss';

const Container = props => {
  const { children, fullInMobile, className, ...rest } = props;

  const classes = classNames('container', className, {
    'container--full-in-mobile': fullInMobile
  });

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullInMobile: PropTypes.bool
};

Container.defaultProps = {
  className: undefined,
  fullInMobile: false
};

export default Container;
