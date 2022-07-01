import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './CustomButton.styles';

export const CustomButton = (props) => {
  const {
    disabled,
    content,
    onClick,
  } = props;

  const timer = useRef(null);

  const handleLongPress = useCallback(() => {
    timer.current = setInterval(() => {
      onClick();
    }, 300);
  }, [onClick]);

  const handleClearTimeout = () => {
    clearInterval(timer.current);
  }

  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleLongPress}
      onMouseUp={handleClearTimeout}
      onMouseLeave={handleClearTimeout}
      onTouchStart={handleLongPress}
      onTouchEnd={handleClearTimeout}
    >
      {content}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  disabled: false,
  content: '',
  onClick: () => {},
};
