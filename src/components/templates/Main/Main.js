import { pickHTMLProps } from 'pick-react-known-prop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'Components/organisms/Footer/Footer';
import Header from 'Components/organisms/Header/Header';

import './Main.scss';

const Main = props => {
  const { className, children, ...rest } = props;

  const classes = classNames(['main', className]);

  return (
    <div className={classes} {...pickHTMLProps(rest)}>
      <Header />

      <main className="main__content">{children}</main>

      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Main.defaultProps = {
  children: undefined,
  className: undefined,
};

export default Main;
