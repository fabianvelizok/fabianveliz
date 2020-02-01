import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Twitter from 'Components/icons/Twitter';
import Linkedin from 'Components/icons/Linkedin';
import Email from 'Components/icons/Email';
import Github from 'Components/icons/Github';

import './SocialLinks.scss';

const SocialLinks = props => {
  const { className, ...rest } = props;

  const classes = classNames(['social-links', className]);

  return (
    <ul className={classes} {...pickHTMLProps(rest)}>
      <li className="social-links__list-item">
        <a href="https://www.linkedin.com/in/velizfabianhoracio/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="social-links__icon" />
        </a>
      </li>
      <li className="social-links__list-item">
        <a href="https://github.com/fabianvelizok" target="_blank" rel="noopener noreferrer">
          <Github className="social-links__icon" />
        </a>
      </li>
      <li className="social-links__list-item">
        <a href="https://twitter.com/fabianvelizok" target="_blank" rel="noopener noreferrer">
          <Twitter className="social-links__icon" />
        </a>
      </li>
      <li className="social-links__list-item">
        <a href="mailto:velizfabianhoracio@gmail.com">
          <Email className="social-links__icon" />
        </a>
      </li>
    </ul>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: undefined,
};

export default SocialLinks;
