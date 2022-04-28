import { pickHTMLProps } from 'pick-react-known-prop';
import React from 'react';

import Container from 'Components/atoms/Container/Container';
import MetaTags from 'Components/atoms/MetaTags/MetaTags';
import WeddingSteps from 'Components/molecules/WeddingSteps/WeddingSteps';

import './Wedding.scss';

const Wedding = props => {
  const { data, ...rest } = props;
  // TODO: Prepare apollo query

  return (
    <Container>
      <MetaTags title="Wedding" />

      <div className="wedding" {...pickHTMLProps(rest)}>
        <WeddingSteps />
      </div>
    </Container>
  );
};

export default Wedding;
