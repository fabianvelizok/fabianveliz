'use client';

import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

import styles from './Header.module.css';

export interface HeaderProps {
  className?: string
}

const Header = (props: HeaderProps) => {
  const { className } = props;
  const [ shouldCompact, setShouldCompact] = useState(false);

  const classes = classNames(styles.header, className, {
    [styles.compact]: shouldCompact,
  });

  const handleScroll = useCallback(() => {
    const scrollYLimit = 30;
    setShouldCompact(window.scrollY >= scrollYLimit);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <header className={classes}>
      <Container className={styles.content}>
        <Logo
          className={classNames({ [styles.compactLogo]: shouldCompact })}
        />

        <Navbar />
      </Container>
    </header>
  );
}

export default Header;