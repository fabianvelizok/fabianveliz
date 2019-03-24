import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Container.scss';

const Container = props => {
  const { children, className, ...rest } = props;

  const classes = classNames(['container', className]);

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Container.defaultProps = {
  className: undefined
};

export default Container;
