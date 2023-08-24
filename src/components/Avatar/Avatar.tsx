import classNames from 'classnames';
import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  alt: string;
  className?: string;
  src: string;
}

const Avatar = (props: AvatarProps) => {
  const { alt, className, src, ...rest } = props;

  return <img alt={alt} className={classNames([styles.avatar, className])} src={src} />;
};

export default Avatar;
