import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '@C/CustomTitle';
import CustomAlert from '@C/CustomAlert';
import CustomForm from '@C/CustomForm';

import {
  TITLE,
  ALERT,
  INPUT_FORM,
} from '@/constants/ComponentType';
import { StyledFormContainer } from '@/styles/Form.styles';

const componentMapper = {
  [TITLE]: CustomTitle,
  [ALERT]: CustomAlert,
  [INPUT_FORM]: CustomForm,
};

const FormFactory = (props) => {
  const {
    fieldInfo: {
      factoryType,
      ...otherProps
    },
  } = props;

  const FactoryComponent = componentMapper[factoryType];
  return FactoryComponent ? (
    <StyledFormContainer>
      <FactoryComponent
        {...otherProps}
      />
    </StyledFormContainer>
  ) : null;
};

FormFactory.propTypes = {
  fieldInfo: PropTypes.shape({
    factoryType: PropTypes.string,
  }),
};

FormFactory.defaultProps = {
  fieldInfo: {},
};

export default FormFactory;
