import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Linkedin from 'Components/icons/Linkedin';
import Email from 'Components/icons/Email';
import Github from 'Components/icons/Github';
import Website from 'Components/icons/Website';

import './SocialLinks.scss';

const Icons = {
  email: Email,
  github: Github,
  linkedin: Linkedin,
  website: Website
};

const SocialLinks = props => {
  const { className, layout, links, ...rest } = props;

  // TODO: Improve this code
  const listClasses = classNames('social-links', className, {
    "social-links--column": layout === "column",
    "social-links--row": layout === "row"
  });

  const listItemClasses = classNames('social-links__list-item', className, {
    "social-links__list-item--column": layout === "column",
    "social-links__list-item--row": layout === "row"
  });

  const linkClasses = classNames('social-links__link', className, {
    "social-links__link--column": layout === "column",
    "social-links__link--row": layout === "row"
  });

  const iconClasses = classNames('social-links__icon', className, {
    "social-links__icon--column": layout === "column",
    "social-links__icon--row": layout === "row"
  });

  const labelClasses = classNames('social-links__label', className, {
    "social-links__label--column": layout === "column",
    "social-links__label--row": layout === "row"
  });

  return (
    <ul className={listClasses} {...pickHTMLProps(rest)}>
      {links.map(socialLink => {
        const SocialLinkComponent = Icons[socialLink.key];

        return (
          <li className={listItemClasses} key={socialLink.key}>
            <a
              className={linkClasses}
              href={socialLink.link}
              rel={socialLink.target === '_blank' ? 'noopener noreferrer' : undefined}
              target={socialLink.target}
            >
              <SocialLinkComponent className={iconClasses} />
              <span className={labelClasses}>{socialLink.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
  layout: PropTypes.oneOf(["column", "row"]),
  links: PropTypes.array.isRequired
};

SocialLinks.defaultProps = {
  className: undefined,
  layout: "row"
};

export default SocialLinks;
