import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AnimationPulse from 'Components/atoms/AnimationPulse/AnimationPulse';

import './Navbar.scss';

const Navbar = props => {
  const { className, ...rest } = props;

  const classes = classNames(['navbar', className]);

  return (
    <nav className={classes} {...pickHTMLProps(rest)}>
      <ul className="navbar__list">
        <li className="navbar__list-item navbar__list-item--hidden">
          <a className="navbar__list-link" href="#hero">
            Home
          </a>
        </li>
        <li className="navbar__list-item navbar__list-item--hidden">
          <a className="navbar__list-link" href="#careers">
            Careers
          </a>
        </li>
        <li className="navbar__list-item navbar__list-item--hidden">
          <a className="navbar__list-link" href="#skills">
            Skills
          </a>
        </li>
        <li className="navbar__list-item navbar__list-item--hidden">
          <a className="navbar__list-link" href="#courses">
            Courses
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="/cv">
            <AnimationPulse>CV</AnimationPulse>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: undefined,
};

export default Navbar;
