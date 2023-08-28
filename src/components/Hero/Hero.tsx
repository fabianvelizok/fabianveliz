import { clsx } from 'clsx';
import Avatar from '../Avatar/Avatar';
import Container from '../Container/Container';
import RichText from '../RichText/RichText';
import SocialLinks from '../SocialLinks/SocialLinks';
import { SocialLinkKey } from '../../types/shared';
// TODO: Check if they're necessary
// import Particles from 'Components/atoms/Particles/Particles';
import styles from './Hero.module.css';

export interface HeroProps {
  className?: string;
  avatar: string;
  links: Array<{
    key: SocialLinkKey;
    label: string;
    link: string;
    target: string;
  }>;
  profile: string;
}

const Hero = (props: HeroProps) => {
  const { avatar, className, links, profile} = props;

  const classes = clsx(styles.hero, className);

  return (
    <div className={classes} id="#hero">
      {/* <Particles /> */}

      <Container className={styles.container} small>
        <Avatar alt="Me" className={styles.photo} src={avatar} />

        <div className={styles.about}>
          <div className={styles.information}>

            {/* <AnimationFadeInDown animateInViewport> */}
              <strong>About me</strong>
            {/* </AnimationFadeInDown> */}

            {/* <AnimationFadeInLeft animateInViewport> */}
              <RichText content={profile} />
            {/* </AnimationFadeInLeft> */}
          </div>
        </div>

        {/* <AnimationPulse className={styles.talk}>Let's talk</AnimationPulse> */}

        <SocialLinks links={links} layout="row"/>
      </Container>
    </div>
  );
};

export default Hero;
