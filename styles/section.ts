import styled from 'styled-components'

const Section = styled.section`
  &:first-of-type {
    .section__inner {
      padding-top: 0;
    }
  }

  .section__inner {
    width: 100%;
    max-width: var(--site-max-width);
    margin: 0 auto;
    position: relative;
    padding: var(--spacing-lg) var(--spacing-md);

    @media (min-width: 768px) {
      padding: var(--spacing-xl) var(--spacing-xxl);
    }
  }

  .section__top {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: var(--spacing-xl);
  }

  .section__heading {
    display: flex;
    margin: 0;
    font-size: var(--fz-xxl);

    @media (max-width: 476px) {
      font-size: var(--fz-lg);
    }
  }

  .section__heading.m-xxl {
    margin-block: 24px 12px;
  }

  .section__breadCrumb {
    display: flex;
    color: var(--light-grey);
    text-transform: capitalize;

    &::after {
      content: '/';
      display: block;
      margin: 0 var(--spacing-sm);
    }

    a {
      &:hover,
      &:focus {
        color: var(--white);
      }
    }

    &:last-of-type {
      color: var(--white);

      a {
        &:hover,
        &:focus {
          text-decoration: none;
        }
      }

      &::after {
        content: '';
      }
    }
  }

  .section__see-all {
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    color: var(--light-grey);
    font-size: var(--fz-xxs);
    font-weight: 700;
    letter-spacing: 0.1em;
    padding-bottom: 2px;
  }
`

export default Section
