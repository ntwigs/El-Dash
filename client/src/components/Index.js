import * as React from 'react'
import styled from 'styled-components'
import { v1 as uuid } from 'uuid'
import { colors } from '../config'
import { withProps } from 'recompose'
import { components } from '../util/components'
import { generateComponent } from './common/generateComponent'

const IndexStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
`

const IndexPure = ({ components }) => (
  <IndexStyled>{generateComponent({ components })}</IndexStyled>
)

export const Index = withProps({
  components: [
    {
      type: components.text,
      value: 'DRICKA VIN',
      small: true,
      position: { x: 50, y: 50 },
      id: uuid(),
    },
    {
      type: components.commits,
      position: { x: 50, y: 100 },
      id: uuid(),
    },
    {
      type: components.subscribers,
      position: { x: 50, y: 150 },
      id: uuid(),
    },
    {
      type: components.time,
      position: { x: 50, y: 200 },
      id: uuid(),
    },
    {
      type: components.weather,
      position: { x: 50, y: 250 },
      id: uuid(),
    },
  ],
})(IndexPure)
