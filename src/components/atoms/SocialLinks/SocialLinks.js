import React from 'react';

import './SocialLinks.scss';

const SocialLinks = props => {
  return (
    <ul className="social-links">
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

export default SocialLinks;
