import Hero from '../components/Hero/Hero';
import data from '../api/data';
import styles from './page.module.css';

export default function Home() {
  const { bio } = data;

  return (
    <>
      <Hero avatar={bio.avatar} className={styles.hero} links={bio.socialLinks} profile={bio.full_profile} />

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
