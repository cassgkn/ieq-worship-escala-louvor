import styled from 'styled-components'

export const StyledLi = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  line-height: 24px;

  .top {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
    text-decoration: underline;
  }

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`
export const StyledH3 = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
