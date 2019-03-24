import React from 'react';

// TODO: Add aliases to webpack config.
import Main from '../components/templates/main';
import SocialLinks from '../components/atoms/SocialLinks/SocialLinks';
import MetaTags from '../components/atoms/MetaTags/MetaTags';

import '../styles/pages/home.scss';

const Home = () => {
  return (
    <Main>
      <MetaTags title="Home" />

      <div className="home">
        <p className="home__welcome">
          Hi! I am currently working on my website. BTW, thanks for visiting it
          <span role="img" aria-label="smile">
            &#x1F600;
          </span>
          <br />
          I will have updates soon!
        </p>

        <p className="home__thanks">Thanks!</p>

        <SocialLinks />
      </div>
    </Main>
  );
};

export default Home;
