import styled, {keyframes} from 'styled-components'

export const Spinner = styled.div`
& {
  display: inline-block;
  transform: translateZ(1px);
}
  display: inline-block;
  width: 51px;
  height: 51px;
  margin: 6px;
  border-radius: 50%;
  background: #fff;
  animation: ${Keyframes} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`

const Keyframes = keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`