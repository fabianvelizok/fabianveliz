import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'Components/atoms/Container/Container';
import Logo from 'Components/atoms/Logo/Logo';
import Copyright from 'Components/atoms/Copyright/Copyright';

import './Footer.scss';

const Footer = props => {
  const { className, ...rest } = props;

  const classes = classNames(['footer', className]);

  return (
    <footer className={classes} {...pickHTMLProps(rest)}>
      <Container className="footer__content">
        <Logo className="footer__logo" />

        <Copyright />
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: undefined
};

export default Footer;
