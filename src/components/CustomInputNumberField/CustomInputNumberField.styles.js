import styled from '@emotion/styled';

const StyledCustomInputNumberField = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0.25rem 0',
  width: '100%',
});

const StyledCustomInputNumberLabelContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  padding: '0.5rem 0.5rem 0.5rem 0',
});

const StyledCustomInputNumberLabel = styled.div({
  fontSize: '1rem',
});

const StyledCustomInputNumberHint = styled.div(({
  theme,
}) => ({
  fontSize: '1rem',
  color: theme.colors.disabled,
}));

export {
  StyledCustomInputNumberField,
  StyledCustomInputNumberLabelContainer,
  StyledCustomInputNumberLabel,
  StyledCustomInputNumberHint,
};
