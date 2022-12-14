import styled, { keyframes } from 'styled-components'

const dance = keyframes`
  from {
    height: 10px;
  }
  to {
    height: 100%;
  }
`

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  .bars {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    width: 100px;
    min-width: 100px;
    height: 50px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    left: 0;
    right: 0;
  }
`

interface IProps {
  delay: string
}

export const Bar = styled.div<IProps>`
  width: 10px;
  height: 5px;
  margin: 0 2px;
  background-color: var(--green);
  animation-name: ${dance};
  animation-duration: 400ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${props => props.delay || '0ms'};
`
