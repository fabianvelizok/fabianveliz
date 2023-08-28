import { clsx } from 'clsx';
import styles from './RichText.module.css';

export interface RichTextProps {
  className?: string;
  inverted?: boolean;
  content: string;
}
const RichText = (props: RichTextProps) => {
  const { className, content, inverted } = props;

  return (
    <div
      className={clsx(styles.richText, className, {
        [styles.inverted]: inverted
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
