import { clsx } from 'clsx';
import Linkedin from '../icons/Linkedin';
import Email from '../icons/Email';
import Github from '../icons/Github';
import Website from '../icons/Website';
import { SocialLinkKey } from '../../types/shared';
import styles from './SocialLinks.module.css';

const Icons = {
  email: Email,
  github: Github,
  linkedin: Linkedin,
  website: Website
};

export interface SocialLinksProps {
  className?: string,
  layout?: 'column' | 'row',
  links: Array<{
    key: SocialLinkKey;
    label: string;
    link: string;
    target: string;
  }>
}

const SocialLinks = (props: SocialLinksProps) => {
  const { className, layout = 'column', links } = props;

  return (
    <ul
      className={clsx(styles.list, className, {
        [styles.listRow]: layout === 'row'
      })}
    >
      {links.map(socialLink => {
        const Icon = Icons[socialLink.key];

        return (
          <li
            className={clsx({
              [styles.listItemRow]: layout === 'row'
            })}
            key={socialLink.key}
          >
            <a
              className={styles.link}
              href={socialLink.link}
              rel={socialLink.target === '_blank' ? 'noopener noreferrer' : undefined}
              target={socialLink.target}
            >
              <Icon
                className={clsx(styles.icon, {
                  [styles.iconRow]: layout === 'row'
                })}
              />
              <span
                className={clsx(styles.label, {
                  [styles.labelRow]: layout === 'row'
                })}
              >{socialLink.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
