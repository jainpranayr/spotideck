import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`
export const Brand = styled.span`
  color: var(--green);
`
export const PrimaryBtn = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--green);
    text-decoration: none;
    filter: brightness(1.1);
  }
`
