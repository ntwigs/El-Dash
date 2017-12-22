import * as React from 'react'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'
import { compose, withState, lifecycle, mapProps, defaultProps } from 'recompose'

const getSubscriberText = ({ subscribers, ...props }) => {
  const generatedCharacters = generateCharacters(subscribers)
  return generatedCharacters(props)
}

const setState = async ({ props: { channelName, setSubscribers } }) => {
  const res = await fetch(`http://localhost:3001/youtube/${ channelName }`)
  const { subscriberCount } = await res.json()
  setSubscribers(subscriberCount)
}

const enhance = compose(
  withState('subscribers', 'setSubscribers', 0),
  defaultProps({ channelName: '' }),
  mapProps(({ subscribers, ...props }) => {
    const subscriberArr = subscribers.toString().split('')
    return {
      ...props,
      subscribers: subscriberArr,
      amount: subscriberArr.length,
    }
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
  <Container { ...props }>{getSubscriberText({ ...props })}</Container>
))
