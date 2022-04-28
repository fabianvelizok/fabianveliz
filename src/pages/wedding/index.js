import { useQuery, gql } from '@apollo/client';
import React from 'react';

import Wedding from 'Components/organisms/Wedding/Wedding';

const WeddingQuery = gql`
  query WeddingQuery {
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

const WeddingPage = () => {
  const { data, error, loading } = useQuery(WeddingQuery);

  // TODO: Move to a component
  if (error) {
    return <div>Error... Oops!</div>;
  }

  // TODO: Move to a component
  if (loading) {
    return <div>Loading...</div>;
  }

  return <Wedding data={data} />;
};

export default WeddingPage;
