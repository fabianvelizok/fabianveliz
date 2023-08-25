import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  alt: string;
  className?: string;
  src: string;
}

const Avatar = (props: AvatarProps) => {
  const { alt, className, src, ...rest } = props;

  return (
    <Image
      alt={alt}
      className={classNames(styles.avatar, className)}
      height={150}
      src={src}
      width={150}
    />
  )
};

export default Avatar;
