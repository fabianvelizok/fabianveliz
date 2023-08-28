import { clsx } from 'clsx';
import styles from './Container.module.css';

export interface ContainerProps {
  children: React.ReactNode,
  className?: string,
  fullInMobile?: boolean,
  noPadding?: boolean,
  small?: boolean
}

const Container = (props: ContainerProps) => {
  const { children, className, fullInMobile, noPadding, small } = props;

  const classes = clsx(styles.container, className, {
    [styles.fullMobile]: fullInMobile,
    [styles.noPadding]: noPadding,
    [styles.small]: small
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container;
