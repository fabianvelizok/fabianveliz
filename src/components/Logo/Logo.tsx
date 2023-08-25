import React from 'react';
import classNames from 'classnames';
import Link from 'next/link'
import styles from './Logo.module.css';

interface LogoProps {
  className?: string
}

const Logo = (props: LogoProps) => {
  const { className } = props;

  return (
    <Link href="/" className={classNames(styles.logo, className)}>
      <span className={styles.caret}>{'<'}</span>
      <span className={styles.name}>FV </span>
      <span className={styles.caret}>{'/>'}</span>
    </Link>
  );
};

export default Logo;