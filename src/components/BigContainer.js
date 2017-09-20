import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Clock } from './information/Main'
import { Text } from './text/Main'

const enhance = compose(
  withState('displayTime', 'setDisplayTime', true),
  withState('displayCommits', 'setDisplayCommits', false),
  lifecycle({
    componentDidMount() {
      const { setDisplayTime, setDisplayCommits } = this.props
      setInterval(() => {
        setDisplayTime(!this.props.displayTime)
        setDisplayCommits(!this.props.displayCommits)
      }, 5000)
    },
  }),
)

const Container = styled.div`
  width: 600px;
`

export const BigContainer = enhance(props => (
  <Container>
    <Text { ...props } />
    <Clock { ...props } />
  </Container>
))
