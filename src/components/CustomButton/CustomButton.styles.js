import styled from '@emotion/styled';

const StyledButton = styled.button(({
  theme,
  disabled,
}) => ({
    display: 'block',
    height: '3rem',
    width: '3rem',
    margin: '0.25rem',
    borderRadius: '0.25rem',
    borderColor: disabled
      ? theme.colors.disabled
      : theme.colors.primary,
    fontSize: '1rem',
    color: disabled
      ? theme.colors.disabled
      : theme.colors.primary,
    background: disabled
      ? theme.colors.disabledBackground
      : theme.colors.white,
    transition: '.2s',

    ...(!disabled && {
      '&:hover': {
        cursor: 'pointer',
        background: theme.colors.primary,
        color: theme.colors.white,
      },
    }),
  })
);

export {
  StyledButton,
};
