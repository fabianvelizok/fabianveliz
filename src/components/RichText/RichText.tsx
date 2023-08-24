import classNames from 'classnames';
import React from 'react';
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
      className={classNames(styles.richText, className, {
        [styles.inverted]: inverted
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
