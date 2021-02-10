import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link'
import { withRouter } from 'next/router'

import './Navbar.scss';

const RESUME_PAGE_PATH = "/resume";

const Navbar = props => {
  const { className, router, ...rest } = props;

  const isResumePage = router && router.pathname === RESUME_PAGE_PATH;

  const classes = classNames(['navbar', className]);

  return (
    <nav className={classes} {...pickHTMLProps(rest)}>
      <ul className="navbar__list">
        {!isResumePage && (          
          <li className="navbar__list-item">
            <Link href="/resume">
              <a className="navbar__list-link">
                Resume
              </a>
            </Link>
          </li>
        )}

        {isResumePage && ( 
          <li className="navbar__list-item">
            <a href="/resume?download=true" className="navbar__list-link" >
              Download PDF
            </a>
          </li>
        )}
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

export default withRouter(Navbar);
