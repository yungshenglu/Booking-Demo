import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';
import isNan from 'lodash/isNan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import CustomButton from '@C/CustomButton';
import {
  StyledCustomInputNumberLayout,
  StyledInput,
} from './CustomInputNumber.styles';

export const CustomInputNumber = (props) => {
  const {
    name,
    min,
    max,
    step,
    value,
    disableMinus,
    disablePlus,
    onChange,
    onBlur,
  } = props;

  const [number, setNumber] = useState(value);

  const handleClickPlus = () => {
    if ((!isUndefined(max) && number < max) || isUndefined(max)) {
      setNumber((prev) => prev + step);
    }
  };

  const handleClickMinus = () => {
    if ((!isUndefined(min) && number > min) || isUndefined(min)) {
      setNumber((prev) => prev - step);
    }
  };

  const handleChange = (event) => {
    const newNumber = get(event, 'target.value');
    if (!isNan(number)) {
      console.log('newNumber:', newNumber);
      setNumber(Number(newNumber));
      onChange();
    }
  };

  const handleBlur = (event) => {
    onBlur();
  };

  return (
    <StyledCustomInputNumberLayout>
      <CustomButton
        disabled={disableMinus}
        onClick={handleClickMinus}
        content={<FontAwesomeIcon icon={faMinus} />}
      />
      <StyledInput
        type="number"
        name={name}
        value={number}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <CustomButton
        disabled={disablePlus}
        onClick={handleClickPlus}
        content={ <FontAwesomeIcon icon={faPlus} />}
      />
    </StyledCustomInputNumberLayout>
  );
};

CustomInputNumber.prototype = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  disableMinus: PropTypes.bool,
  disablePlus: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

CustomInputNumber.defaultProps = {
  name: '',
  min: undefined,
  max: undefined,
  step: 1,
  value: 0,
  disableMinus: false,
  disablePlus: false,
  onChange: () => {},
  onBlur: () => {},
};
