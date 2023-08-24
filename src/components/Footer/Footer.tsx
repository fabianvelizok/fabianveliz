import React from 'react';
import classNames from 'classnames';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

export interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps) => {
  const { className } = props;

  return (
    <footer className={classNames(styles.footer, className)}>
      <Container className={styles.content}>
        <Logo className={styles.logo} />

        <a
          href="https://github.com/fabianvelizok"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.copyright}
        >
          Veliz Fabian Horacio
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
