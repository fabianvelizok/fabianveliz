import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'Components/atoms/Container/Container';
import Logo from 'Components/atoms/Logo/Logo';
import Navbar from 'Components/atoms/Navbar/Navbar';

import './Header.scss';

const Header = props => {
  const { className, ...rest } = props;

  const classes = classNames(['header', className]);

  return (
    <header className={classes} {...pickHTMLProps(rest)}>
      <Container className="header__content">
        <Logo />

        <Navbar />
      </Container>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: undefined
};

export default Header;
