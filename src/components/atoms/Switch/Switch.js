import React, { useState, useEffect } from 'react';

import './Switch.scss';

const Switch = (props) => {
  const { handleChangeCallback, text, defaultChecked } = props;
  const defaultValue = typeof defaultChecked !== "undefined" ? defaultChecked : false;
  const [isChecked, setIsChecked] = useState(defaultValue);

  useEffect(() => {
    if (handleChangeCallback) {
      handleChangeCallback(isChecked);
    }
  }, [isChecked])

  return (
    <div className="switch">
      <span className="switch__text">{text}</span>

      <div className="switch__inner-wrapper">
        <label>
          <input
            defaultChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="switch__input"
            type="checkbox"
          />
          <div>
            <div></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Switch;
