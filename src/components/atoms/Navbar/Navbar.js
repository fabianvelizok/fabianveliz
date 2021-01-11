import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link'
import { withRouter } from 'next/router'

import './Navbar.scss';

const CV_PAGE_PATH = "/cv";

const Navbar = props => {
  const { className, router, ...rest } = props;

  const isCVPage = router && router.pathname === CV_PAGE_PATH;

  const classes = classNames(['navbar', className]);

  return (
    <nav className={classes} {...pickHTMLProps(rest)}>
      <ul className="navbar__list">
        {!isCVPage && (          
          <li className="navbar__list-item">
            <Link href="/cv">
              <a className="navbar__list-link">
                CV
              </a>
            </Link>
          </li>
        )}

        {isCVPage && ( 
          <li className="navbar__list-item">
            <a href="/cv?download=true" className="navbar__list-link" >
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
