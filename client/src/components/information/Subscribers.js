import * as React from 'react'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'
import { compose, withState, lifecycle, mapProps, defaultProps } from 'recompose'

const getSubscriberText = ({ subscribers, ...props }) => {
  const generatedCharacters = generateCharacters(subscribers)
  return generatedCharacters(props)
}

const setState = async ({ props }) => {
  const res = await fetch(`http://localhost:3000/youtube/${ props.channelName }`)
  const { subscriberCount } = await res.json()
  props.setSubscribers(subscriberCount)
}

const enhance = compose(
  withState('subscribers', 'setSubscribers', 0),
  defaultProps({ channelName: 'PewDiePie' }),
  mapProps(({ subscribers, ...props }) => {
    const subscriberArr = subscribers.toString().split('')
    return Object.assign(props, {}, {
      subscribers: subscriberArr,
      amount: subscriberArr.length,
    })
  }),
  lifecycle({
    async componentDidMount() {
      const halfMinute = 30000
      setState(this)
      setInterval(async () => setState(this), halfMinute)
    },
  }),
)

export const Subscribers = enhance(props => (
  <Container {...props}>{getSubscriberText({ ...props })}</Container>
))
