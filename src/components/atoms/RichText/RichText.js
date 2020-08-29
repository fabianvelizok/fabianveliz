import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './RichText.scss';

const RichText = props => {
  const { className, content, ...rest } = props;

  const classes = classNames(['richText', className]);

  // eslint-disable-next-line react/no-danger
  return <div className={classes} dangerouslySetInnerHTML={{ __html: content }} {...pickHTMLProps(rest)} />;
};

RichText.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

RichText.defaultProps = {
  className: undefined,
};

export default RichText;
