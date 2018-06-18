import React from 'react';
import Head from 'next/head';

const Main = props => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossOrigin="anonymous"
      />
    </Head>
    <main>{props.children}</main>
  </div>
);

export default Main;
