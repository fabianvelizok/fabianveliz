import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface NavbarProps {
  className?: string
}

const Navbar = (props: NavbarProps) => {
  const { className,} = props;

  return (
    <nav className={classNames(className)}>
      <ul className={styles.navbar}>
        <li className={styles.listItem}>
          <Link href="/" className={styles.anchor}>Home</Link>
        </li>

        <li className={styles.listItem}>
          <Link href="/resume" className={styles.anchor}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
