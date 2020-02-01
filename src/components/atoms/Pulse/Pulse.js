import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Pulse.scss';

const Pulse = props => {
  const { className, children, ...rest } = props;

  const classes = classNames(['pulse', className]);

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      {children}
    </div>
  );
};

Pulse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Pulse.defaultProps = {
  children: undefined,
  className: undefined,
};

export default Pulse;
