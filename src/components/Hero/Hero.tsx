import classNames from 'classnames';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Container from '../Container/Container';
import RichText from '../RichText/RichText';

// TODO: Check if they're necessary
// import Particles from 'Components/atoms/Particles/Particles';
// import SocialLinks from 'Components/atoms/SocialLinks/SocialLinks';

import styles from './Hero.module.css';


export interface HeroProps {
  className?: string;
  avatar: string;
  links: Array<{
    key: string;
    label: string;
    link: string;
    target: string;
  }>;
  profile: string;
}

const Hero = (props: HeroProps) => {
  const { avatar, className, links, profile} = props;

  const classes = classNames([styles.hero, className]);

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

        {/* <SocialLinks links={links} /> */}
      </Container>
    </div>
  );
};

export default Hero;
