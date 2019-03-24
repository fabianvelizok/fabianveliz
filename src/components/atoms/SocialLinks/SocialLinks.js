import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './SocialLinks.scss';

const SocialLinks = props => {
  const { className, ...rest } = props;

  const classes = classNames(['social-links', className]);

  return (
    <ul className={classes} {...pickHTMLProps(rest)}>
      <li className="social-links__list-item">
        <a
          href="https://goo.gl/bssTti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social-links__icon fab fa-linkedin" />
        </a>
      </li>
      <li className="social-links__list-item">
        <a
          href="https://goo.gl/9JFzLu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social-links__icon fab fa-twitter-square" />
        </a>
      </li>
      <li className="social-links__list-item">
        <a
          href="https://goo.gl/1CGnKQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social-links__icon fab fa-github-square" />
        </a>
      </li>
    </ul>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string
};

SocialLinks.defaultProps = {
  className: undefined
};

export default SocialLinks;
