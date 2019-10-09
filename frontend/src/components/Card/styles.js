import styled from 'styled-components'
import { DummyImage } from '../DummyImage'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px linear-gradient(90deg, rgba(0,0,0,.3)0%, rgba(0,0,0,0)100%);
  border-radius: 20px;
  width: 320px;
  height: 440px;
`
export const Svg = styled(DummyImage)`
  width: 100%;
  height: auto;
`