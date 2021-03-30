import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Website = props => {
  const { className, ...rest } = props;

  const classes = classNames(className);

  return (
    <svg className={classes} {...pickHTMLProps(rest)} height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12c.75 0 1.48-.07 2.2-.2l-.82-2.46c-.12.12-.25.22-.38.31v-1.46l-1.86-5.57c-.1-.29-.14-.59-.14-.88v2.03c-.95.04-1.88.12-2.76.27-.18-.94-.3-1.96-.35-3.06H11v.76c0-.71.28-1.4.81-1.93.51-.52 1.2-.81 1.94-.81.3 0 .59.05.88.14l5.51 1.84h1.81c-.02.2-.04.39-.08.58l1.93.64c.13-.72.2-1.45.2-2.2 0-6.62-5.38-12-12-12zm-1 17.77v3.88c-.86-.58-1.68-1.86-2.26-3.67.73-.11 1.48-.18 2.26-.21zM3.6 6.59c.8.38 1.7.7 2.68.96-.21 1.07-.34 2.22-.39 3.43H2.05c.16-1.6.72-3.09 1.55-4.39zm-1.55 6.39h3.84c.05 1.23.18 2.39.39 3.47-.98.26-1.88.58-2.68.96a9.961 9.961 0 01-1.55-4.43zm5.89 8.15a9.977 9.977 0 01-3.05-2.11c.57-.25 1.2-.46 1.87-.63.32 1.03.72 1.96 1.18 2.74zM6.76 5.61c-.67-.17-1.3-.38-1.87-.63.87-.88 1.9-1.6 3.05-2.11-.46.78-.86 1.71-1.18 2.74zM11 10.98H7.89c.05-1.08.17-2.09.35-3.02.88.15 1.81.23 2.76.27zm0-4.75c-.78-.03-1.53-.1-2.26-.21.58-1.81 1.4-3.09 2.26-3.67zm2-3.88c.86.58 1.68 1.86 2.26 3.67-.73.11-1.48.18-2.26.21zm0 8.63V8.23c.95-.04 1.88-.12 2.76-.27.18.93.3 1.94.35 3.02zm3.06-8.11c1.15.51 2.18 1.23 3.05 2.11-.57.25-1.2.46-1.87.63-.32-1.03-.72-1.96-1.18-2.74zm2.05 8.11c-.05-1.21-.18-2.36-.39-3.43.98-.26 1.88-.58 2.68-.96.83 1.3 1.39 2.79 1.55 4.39z"/><path d="M16.917 24H16.9a.749.749 0 01-.694-.513l-3.167-9.5a.75.75 0 01.949-.949l9.5 3.167a.75.75 0 01.032 1.411l-4.263 1.64-1.64 4.263a.75.75 0 01-.7.481z"/></svg>
  );
};

Website.propTypes = {
  className: PropTypes.string,
};

Website.defaultProps = {
  className: undefined,
};

export default Website;