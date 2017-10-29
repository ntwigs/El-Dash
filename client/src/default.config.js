import * as React from 'react'
import { Commits } from './components/information/Commits'
import { Time } from './components/information/Time'
import { Text } from './components/information/Text'
import { Weather } from './components/information/Weather'
import { Row } from './components/layout/Row'
import { Container } from './components/layout/Container'

/**
 * Default:
 * size = 30
 */
export const size = 30

/**
 * Default:
 * speed: 0.75,
 * delay: 0.01,
 */
export const animationConfig = {
  speed: 0.75,
  delay: 0.05,
}

/**
 * Default:
 * background: '#000000',
 * foreground: '#212121',
 */
export const colors = {
  background: '#000000',
  foreground: '#212121',
}


/**
 * Only place small components in row.
 * Available components:
 * <Time /> Displays Hour:minute ex. 14:04
 * <Text /> Displays supplied text ex. text={ 'test' }
 * <Commits /> Displays todays commit amount
 * <Row /> Placing two **SMALL** components next to each other
 * <Container /> The wrapping component
 * 
 * Available global options:
 * small - Makes the component smaller
 * animation - Enables animation (Not recommended on RPi)
 * 
 * Available text options:
 * text - The text to be displayed. Ex. text={ 'commits' }
 * 
 * Available weather options:
 * farenheit - display farenheit. Default: celsius
 * 
 * Default:
 * <Container>
 *  <Row>
 *    <Time small animation />
 *    <Text small text={ 'commits' }
 *  </Row>
 *  <Commits animation />
 * </Container>
 */
export const layout = () => (
  <Container>
    <Row>
      <Text  text='sleep' small animation />
      <Text  text='sucks' small animation />
    </Row>
    <Time animation />
    <Row>
      <Text  text='commits' small animation />
      <Text  text='today' small animation />
    </Row>
    <Commits animation />
    <Weather animation farenheit />
  </Container>
)
