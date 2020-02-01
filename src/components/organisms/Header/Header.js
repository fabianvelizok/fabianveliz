import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Container from 'Components/atoms/Container/Container';
import Logo from 'Components/atoms/Logo/Logo';
import Navbar from 'Components/atoms/Navbar/Navbar';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldInvertHeaderStyles: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollYLimit = 30;

    this.setState({
      shouldInvertHeaderStyles: window.scrollY >= scrollYLimit,
    });
  };

  render() {
    const { className, ...rest } = this.props;
    const { shouldInvertHeaderStyles } = this.state;

    const classes = classNames('header', className, {
      'header--black': shouldInvertHeaderStyles,
    });

    return (
      <header className={classes} {...pickHTMLProps(rest)}>
        <Container className="header__content">
          <Logo />
          <Navbar />
        </Container>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
};

export default Header;
