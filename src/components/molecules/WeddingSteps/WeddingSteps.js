import { pickHTMLProps } from 'pick-react-known-prop';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Particles from 'Components/atoms/Particles/Particles';
import WeddingStep1 from '../WeddingStep1/WeddingStep1';
import WeddingStep2 from '../WeddingStep2/WeddingStep2';
import WeddingStep3 from '../WeddingStep3/WeddingStep3';
import WeddingStep4 from '../WeddingStep4/WeddingStep4';
import { particlesConfig } from './WeddingSteps.contants';

import '../../organisms/Wedding/Wedding.scss';

const WeddingSteps = props => {
  const { className, ...rest } = props;

  return (
    <div className={classNames(className, 'wedding__steps')} {...pickHTMLProps(rest)}>
      <Particles config={particlesConfig} />
      <div className="wedding__steps__content">
        <WeddingStep1 />
        <WeddingStep2 />
        <WeddingStep3 />
        <WeddingStep4 />
      </div>
    </div>
  );
};

WeddingSteps.propTypes = {
  className: PropTypes.string,
};

WeddingSteps.defaultProps = {
  className: undefined,
};

export default WeddingSteps;
