import { pickHTMLProps } from 'pick-react-known-prop';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../organisms/Wedding/Wedding.scss';

const WeddingStep4 = props => {
  const { className, ...rest } = props;

  return (
    <div className={classNames(className, 'wedding__step-4')} {...pickHTMLProps(rest)}>
      <h2>Confirma tu asistencia</h2>

      <iframe
        title="Confirma tu asistencia"
        src="https://docs.google.com/forms/d/e/1FAIpQLScwWTcdgljJQ1jnxBCqp-0M-e3MZRbYZvCzEXFhIShVY3-24g/viewform?embedded=true"
        width="100%"
      />

      <p>Si ya llenaste el formulario con tu nombre y apellido, no hace falta más nada.</p>
      <p>Ante cualquier duda, contactanos.</p>
    </div>
  );
};

WeddingStep4.propTypes = {
  className: PropTypes.string,
};

WeddingStep4.defaultProps = {
  className: undefined,
};

export default WeddingStep4;
