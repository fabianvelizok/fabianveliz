import { Metadata } from 'next'
import data from '../api/data';
import Hero from '../components/Hero/Hero';
import { SocialLinkKey } from '../types/shared';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Fabian Horacio Veliz | Home',
}

export default function Home() {
  const { bio } = data;

  return (
    <>
      <Hero
        avatar={bio.avatar}
        className={styles.hero}
        links={bio.socialLinks as Array<{
          key: SocialLinkKey;
          label: string;
          link: string;
          target: string;
        }>}
        profile={bio.full_profile}
        />

      {/* TODO: Remove temporal container */}
      <div
        style={{
          padding: '3rem',
          textAlign: 'center',
        }}
      >
        Updates are coming soon!
      </div>
    </>
  )
}
