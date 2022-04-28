import { pickHTMLProps } from 'pick-react-known-prop';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HOST } from 'Utils/constants';

import '../../organisms/Wedding/Wedding.scss';

const WeddingStep1 = props => {
  const { className, ...rest } = props;

  return (
    <div className={classNames(className, 'wedding__step-1')} {...pickHTMLProps(rest)}>
      <h2>Nos casamos</h2>
      <h3>Has sido cordialmente invitado a nuestro casamiento!</h3>
      <div className="wedding__step-1__photo-container">
        <img alt="Flowers" className="wedding__step-1__flowers" src={`${HOST}/static/flowers.png`} />
        <img alt="Yuli & Fabi" className="wedding__step-1__us" src={`${HOST}/static/us.png`} />
      </div>
      <h3>❤️ Yuli & Fabi ❤️</h3>
    </div>
  );
};

WeddingStep1.propTypes = {
  className: PropTypes.string,
};

WeddingStep1.defaultProps = {
  className: undefined,
};

export default WeddingStep1;
