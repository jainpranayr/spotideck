import * as styled from 'styled-components'
import variables from './variables'

const GlobalStyles = styled.createGlobalStyle`
  ${variables}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--white);
    font-family: var(--font);
    font-size: var(--fz-md);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: -0.04em;
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  a,
  button {
    transition: all 0.3s ease;
    color: inherit;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
    .overflow-ellipsis {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: unset;
      word-break: break-all;
    }
  }

  button {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: var(--border-radius-pill);
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--white);
    font-size: var(--fz-xxs);
    font-weight: 700;
    padding: var(--spacing-xs) var(--spacing-sm);

    &:hover,
    &:focus {
      background-color: var(--dark-grey);
      outline: 0;
    }

    @media (min-width: 768px) {
      font-size: var(--fz-sm);
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  main {
    position: relative;
    padding: var(--spacing-xxl) 0;

    @media (max-width: 476px) {
      padding: var(--spacing-xl) 0;
    }
  }

  .page {
    padding: var(--spacing-xl) 0;
  }

  .overflow-ellipsis {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: unset;
    word-break: break-all;
  }

  .empty-notice {
    color: var(--grey);
    font-size: var(--fz-lg);
    text-align: center;
    padding: var(--spacing-xxl);
  }
`

export default GlobalStyles
