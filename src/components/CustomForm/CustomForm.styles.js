import styled from '@emotion/styled';

const StyledCustomForm = styled.div(({
  theme,
  showDivider,
}) => ({
  padding: '0.25rem 0',

  ...(showDivider && {
    borderBottom: `2px solid ${theme.colors.disabledBackground}`,
  })
}));

export {
  StyledCustomForm,
};
