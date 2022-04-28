import { pickHTMLProps } from 'pick-react-known-prop';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../organisms/Wedding/Wedding.scss';

const WeddingStep3 = props => {
  const { className, ...rest } = props;

  return (
    <div className={classNames(className, 'wedding__step-3')} {...pickHTMLProps(rest)}>
      <h2>Información adicional</h2>

      <p>
        <strong>Valor de tarjeta:</strong>
        <span>$2100 por persona</span>
      </p>
      <p>
        <strong>Código de vestimenta:</strong>
        <span>Formal</span>
      </p>
    </div>
  );
};

WeddingStep3.propTypes = {
  className: PropTypes.string,
};

WeddingStep3.defaultProps = {
  className: undefined,
};

export default WeddingStep3;
