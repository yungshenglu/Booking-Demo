import styled from '@emotion/styled';

const StyledCustomInputNumberLayout = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '0.25rem 0',
});

const StyledInput = styled.input(({
  theme,
}) => ({
  display: 'block',
  width: '2.75rem',
  margin: '0.25rem 0.5rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  borderColor: theme.colors.secondary,
  textAlign: 'center',
}));

export {
  StyledCustomInputNumberLayout,
  StyledInput,
};
