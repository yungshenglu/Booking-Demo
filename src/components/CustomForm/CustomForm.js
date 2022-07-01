import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '@C/CustomTitle';
import CustomInputNumberField from '@C/CustomInputNumberField';
import {
  TITLE,
  INPUT_NUMBER_FIELD,
} from '@/constants/ComponentType';

import {
  StyledCustomForm,
} from './CustomForm.styles';

export const CustomForm = (props) => {
  const {
    inputFields,
    showDivider,
  } = props;

  return (
    <StyledCustomForm
      showDivider={showDivider}
    >
      {inputFields.map((item) => (
        <>
          {item.type === TITLE && (
            <CustomTitle
              {...item.componentProps}
            />
          )}
          {item.type === INPUT_NUMBER_FIELD && (
            <CustomInputNumberField
              {...item.componentProps}
            />
          )}
        </>
      ))}
    </StyledCustomForm>
  )
};

CustomForm.propTypes = {
  inputFields: PropTypes.shape([]).isRequired,
  showDivider: PropTypes.bool,
};

CustomForm.defaultProps = {
  showDivider: false,
};
