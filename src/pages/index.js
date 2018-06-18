import React from 'react';
import Head from 'next/head';
import Main from '../components/templates/main';
import '../styles/pages/home.scss';

const Home = () => (
  <div>
    <Head>
      <title>FV | Home</title>
    </Head>
    <Main>
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

        <ul className="home__links">
          <li className="list-item">
            <a
              href="https://goo.gl/bssTti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-linkedin" />
            </a>
          </li>
          <li className="list-item">
            <a
              href="https://goo.gl/9JFzLu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-twitter-square" />
            </a>
          </li>
          <li className="list-item">
            <a
              href="https://goo.gl/1CGnKQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-github-square" />
            </a>
          </li>
        </ul>
      </div>
    </Main>
  </div>
);

export default Home;
