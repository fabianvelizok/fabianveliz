import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './RichText.scss';

const RichText = props => {
  const { className, content, inverted, ...rest } = props;

  // eslint-disable-next-line react/no-danger
  return (
    <div
      className={classNames('richText', className, {
        'richText--inverted': inverted
      })}
      dangerouslySetInnerHTML={{ __html: content }}
      {...pickHTMLProps(rest)}
    />
  );
};

RichText.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

RichText.defaultProps = {
  className: undefined,
  inverted: false
};

export default RichText;
