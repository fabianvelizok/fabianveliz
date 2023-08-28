import { clsx } from 'clsx';
import Image from 'next/image';
import styles from './Avatar.module.css';

export interface AvatarProps {
  alt: string;
  className?: string;
  size?: number;
  src: string;
}

const Avatar = (props: AvatarProps) => {
  const { alt, className, size = 150, src, } = props;

  return (
    <Image
      alt={alt}
      className={clsx(styles.avatar, className)}
      height={size}
      src={src}
      width={size}
    />
  )
};

export default Avatar;
