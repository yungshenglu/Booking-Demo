import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
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
    autoFocus,
    onClickPlus,
    onClickMinus,
    onClickChange,
    onChange,
    onBlur,
  } = props;

  const inputRef = useRef(null);

  const handleClickPlus = useCallback(() => {
    if (value <= max) {
      onClickChange(value + step);
      onClickPlus();
    }
  }, [value, step, max]);

  const handleClickMinus = useCallback(() => {
    if (value >= min) {
      onClickChange(value - step);
      onClickMinus();
    }
  }, [value, step, min]);

  const handleChange = useCallback((event) => {
    const newValue = Number(get(event, 'target.value'));
    if (newValue >= min && newValue <= max) {
      onChange(Number(newValue));
    }
  }, [value, max, min]);

  const handleBlur = useCallback((event) => {
    const newValue = Number(get(event, 'target.value'));
    if (newValue >= min && newValue <= max) {
      inputRef.current.value = newValue;
      onBlur(Number(newValue));
    }
  }, [value, max, min]);

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
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus={autoFocus}
        alt="inputNumber"
        ref={inputRef}
      />
      <CustomButton
        disabled={disablePlus}
        onClick={handleClickPlus}
        content={<FontAwesomeIcon icon={faPlus} />}
      />
    </StyledCustomInputNumberLayout>
  );
};

CustomInputNumber.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  disableMinus: PropTypes.bool,
  disablePlus: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onClickPlus: PropTypes.bool,
  onClickMinus: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

CustomInputNumber.defaultProps = {
  name: '',
  min: -Infinity,
  max: Infinity,
  step: 1,
  value: 0,
  disableMinus: false,
  disablePlus: false,
  autoFocus: false,
  onClickPlus: () => {},
  onClickMinus: () => {},
  onChange: () => {},
  onBlur: () => {},
};
