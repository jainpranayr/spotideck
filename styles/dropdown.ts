import styled from 'styled-components'

const DropDown = styled.div`
  position: absolute;
  top: -1px;
  right: var(--spacing-xxl);
  z-index: 1;

  @media (max-width: 556px) {
    top: 28px;
    right: 10px;
  }

  &:after {
    content: '';
    top: 15px;
    right: var(--spacing-sm);
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--white);
  }

  select {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background-color: var(--near-black);
    color: white;
    border: 0;
    border-radius: var(--border-radius-subtle);
    font-size: var(--fz-sm);
    font-weight: 500;
    font-family: inherit;
    padding: var(--spacing-xs) var(--spacing-xl) var(--spacing-xs)
      var(--spacing-sm);
  }
`

export default DropDown
