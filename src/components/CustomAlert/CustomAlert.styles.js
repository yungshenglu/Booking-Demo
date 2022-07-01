import styled from '@emotion/styled';

const StyledCustomAlert = styled.div(({
  theme,
}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: `2px solid ${theme.colors.info}`,
  borderRadius: '0.5rem',
  background: theme.colors.infoBackground,
  color: theme.colors.secondary,
  padding: '1rem',
}));

const StyledCustomAlertContent = styled.div({
  marginLeft: '0.5rem',
})

export {
  StyledCustomAlert,
  StyledCustomAlertContent,
};
