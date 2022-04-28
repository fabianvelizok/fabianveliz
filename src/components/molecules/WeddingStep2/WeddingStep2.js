import { pickHTMLProps } from 'pick-react-known-prop';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../organisms/Wedding/Wedding.scss';

const WeddingStep2 = props => {
  const { className, ...rest } = props;

  return (
    <div className={classNames(className, 'wedding__step-2')} {...pickHTMLProps(rest)}>
      <h2>Información de los eventos</h2>

      <p>Famaillá, 11 de Junio de 2022</p>
      <p>
        El casamiento por iglesia inicia a las 19 horas en la Parroquia Nuestra Señora Del Carmen, ubicada en Lavalle
        256, frente a la plaza principal.
      </p>
      <a href="https://goo.gl/maps/TcGbwQ8Aqpahf5pd8" rel="noreferrer" target="_blank">
        Ver en mapa
      </a>

      <p>
        La fiesta inicia a las 21 horas en el Salon Petrona Eventos, ubicado en Rivadavia 338, a media cuadra de la
        plaza principal.
      </p>

      <a href="https://goo.gl/maps/JT7TKfBrZ4KAi4tx8" rel="noreferrer" target="_blank">
        Ver en mapa
      </a>
    </div>
  );
};

WeddingStep2.propTypes = {
  className: PropTypes.string,
};

WeddingStep2.defaultProps = {
  className: undefined,
};

export default WeddingStep2;
