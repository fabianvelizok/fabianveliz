import { pickHTMLProps } from 'pick-react-known-prop';
import { useQuery, gql } from "@apollo/client";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from 'Components/atoms/Hero/Hero';
import Main from 'Components/templates/Main/Main';
import MetaTags from 'Components/atoms/MetaTags/MetaTags';

import './index.scss';

const HomeQuery = gql`
  query HomeQuery {
    bio {
      avatar
      name
      full_profile
      socialLinks {
        key
        label
        link
        target
      }
    }
  }
`;

const Home = props => {
  const { className, ...rest } = props;

  const classes = classNames(['home', className]);

  const { data, error, loading } = useQuery(HomeQuery);

  // TODO: Move to a component
  if (error) {
    return <div>Error... Oops!</div>
  }

  // TODO: Move to a component
  if (loading) {
    return <div>Loading...</div>
  }

  const { bio } = data;

  return (
    <Main className={classes} {...pickHTMLProps(rest)}>
      <MetaTags title="Home" />

      <Hero avatar={bio.avatar} className="home__hero" links={bio.socialLinks} profile={bio.full_profile} />

      {/* TODO: Remove temporal div */}
      <div
        style={{
          padding: '3rem',
          backgroundColor: '#347474',
          textAlign: 'center',
        }}
      >
        This site is under construction.
        <br />
        Updates are coming soon!
      </div>
    </Main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: undefined,
};

export default Home;
