import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import {
  StyledCustomAlert,
  StyledCustomAlertContent,
} from './CustomAlert.styles';

export const CustomAlert = (props) => {
  const {
    content,
  } = props;

  return (
    <StyledCustomAlert>
      <FontAwesomeIcon icon={faCircleInfo} />
      <StyledCustomAlertContent>
        {content}
      </StyledCustomAlertContent>
    </StyledCustomAlert>
  );
};

CustomAlert.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

CustomAlert.defaultProps = {
  content: '',
};
