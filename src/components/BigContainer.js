import * as React from 'react'
import { compose, withState, lifecycle } from 'recompose'
import { Clock } from './clock/Main'
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

export const BigContainer = enhance(props => (
  <div>
    <Text { ...props } />
    <Clock />
  </div>
))
