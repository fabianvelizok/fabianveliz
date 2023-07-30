import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Copyright.scss';

const Copyright = props => {
  const { className, ...rest } = props;

  const classes = classNames(['copyright', className]);

  return (
    <a
      className={classes}
      href="https://github.com/fabianvelizok"
      rel="noopener noreferrer"
      target="_blank"
      {...pickHTMLProps(rest)}
    >
      ©2020 - Veliz Fabián Horacio
    </a>
  );
};

Copyright.propTypes = {
  className: PropTypes.string,
};

Copyright.defaultProps = {
  className: undefined,
};

export default Copyright;
