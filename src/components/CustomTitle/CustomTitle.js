import React from 'react';
import PropTypes from 'prop-types';

import { StyledCustomTitle } from './CustomTitle.styles';

export const CustomTitle = (props) => {
  const {
    content,
  } = props;

  return (
    <StyledCustomTitle>
      {content}
    </StyledCustomTitle>
  );
};

CustomTitle.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

CustomTitle.defaultProps = {
  content: '',
};
