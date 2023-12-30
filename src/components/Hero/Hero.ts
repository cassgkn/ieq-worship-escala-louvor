import styled from 'styled-components'

export const StyledForm = styled.form`
  height: 360px;
  width: 100%;
  background-color: #000;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`
export const StyledDiv = styled.div`
  position: relative;
  color: #eee;
`

export const StyledH2 = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    padding: 0 10px;
  }
`
