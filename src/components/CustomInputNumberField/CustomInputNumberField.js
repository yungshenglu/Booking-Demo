import React from 'react';
import PropTypes from 'prop-types';

import CustomInputNumber from '@C/CustomInputNumber';

import {
  StyledCustomInputNumberField,
  StyledCustomInputNumberLabelContainer,
  StyledCustomInputNumberLabel,
  StyledCustomInputNumberHint,
} from './CustomInputNumberField.styles';

export const CustomInputNumberField = (props) => {
  const {
    label,
    hint,
    ...inputNumberFiledProps
  } = props;

  return (
    <StyledCustomInputNumberField>
      <StyledCustomInputNumberLabelContainer>
        <StyledCustomInputNumberLabel>
          {label}
        </StyledCustomInputNumberLabel>
        <StyledCustomInputNumberHint>
          {hint}
        </StyledCustomInputNumberHint>
      </StyledCustomInputNumberLabelContainer>
      <CustomInputNumber
        {...inputNumberFiledProps}
      />
    </StyledCustomInputNumberField>
  )
};

CustomInputNumberField.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
};

CustomInputNumberField.defaultProps = {
  label: '',
  hint: '',
};
