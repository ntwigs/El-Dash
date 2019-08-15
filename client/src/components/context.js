import * as React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import {v1 as uuid} from 'uuid'
import {components} from '../util/components'
import store from 'store'

// const defaultContext = [
//   {
//     type: components.text,
//     value: 'Oscar',
//     position: {x: 50, y: 50},
//     id: uuid(),
//   },
//   {
//     type: components.commits,
//     position: {x: 50, y: 100},
//     id: uuid(),
//   },
//   {
//     type: components.subscribers,
//     position: {x: 50, y: 150},
//     id: uuid(),
//   },
//   {
//     type: components.time,
//     position: {x: 50, y: 200},
//     id: uuid(),
//   },
//   {
//     type: components.weather,
//     position: {x: 50, y: 250},
//     id: uuid(),
//   },
// ]

const COMPONENT_STRING = 'components'

const ComponentContext = React.createContext()

const PureComponentProvider = ({
  components,
  resetComponents,
  addTextComponent,
  addTimeComponent,
  addWeatherComponent,
  addTimeTextComponent,
  addDateComponent,
  centerAllComponents,
  updatePosition,
  children,
}) => (
  <ComponentContext.Provider
    value={{
      components,
      resetComponents,
      addTextComponent,
      addTimeComponent,
      addWeatherComponent,
      addDateComponent,
      addTimeTextComponent,
      updatePosition,
      centerAllComponents,
    }}>
    {children}
  </ComponentContext.Provider>
)

export const ComponentProvider = compose(
  withState(COMPONENT_STRING, 'setComponents', store.get(COMPONENT_STRING) || []),
  withHandlers({
    resetComponents: ({setComponents}) => () => {
      store.remove(COMPONENT_STRING)
      setComponents([])
    },
    addWeatherComponent: ({components: oldComponents, setComponents}) => () => {
      const updatedComponents = [
        ...oldComponents,
        {
          type: components.weather,
          position: {x: 50, y: 50},
          id: uuid()
        }
      ] 
      store.set(COMPONENT_STRING)
      setComponents(updatedComponents)
    },
    addDateComponent: ({components: oldComponents, setComponents}) => () => {
      const updatedComponents = [
        ...oldComponents,
        {
          type: components.date,
          position: {x: 50, y: 50},
          id: uuid()
        }
      ] 
      console.log('here')
      store.set(COMPONENT_STRING)
      setComponents(updatedComponents)
    },
    addTimeComponent: ({components: oldComponents, setComponents}) => () => {
      const updatedComponents = [
        ...oldComponents,
        {
          type: components.time,
          position: {x: 50, y: 50},
          id: uuid()
        }
      ] 
      store.set(COMPONENT_STRING)
      setComponents(updatedComponents)
    },
    addTimeTextComponent: ({components: oldComponents, setComponents}) => () => {
      const updatedComponents = [
        ...oldComponents,
        {
          type: components.text,
          value: 'time',
          position: {x: 50, y: 50},
          id: uuid(),
        },
      ]
      store.set(COMPONENT_STRING, updatedComponents)
      setComponents(updatedComponents)
    },
    addTextComponent: ({components: oldComponents, setComponents}) => () => {
      const updatedComponents = [
        ...oldComponents,
        {
          type: components.text,
          value: 'weather',
          position: {x: 50, y: 50},
          id: uuid(),
        },
      ]
      store.set(COMPONENT_STRING, updatedComponents)
      setComponents(updatedComponents)
    },
    centerAllComponents: ({components, setComponents}) => () => {
      const updatedComponents = components.map(({position, ...rest}) => ({
        position: {x: 0, y: 0},
        ...rest,
      }))
      store.set(COMPONENT_STRING, updatedComponents)
      setComponents(updatedComponents)
    },
    updatePosition: ({components, setComponents}) => ({id, e}) => {
      const {x, y} = e
      const updatedComponents = components.map(component =>
        id === component.id ? {...component, position: {x, y}} : component,
      )
      store.set(COMPONENT_STRING, updatedComponents)
      setComponents(updatedComponents)
    },
  }),
)(PureComponentProvider)

export const ComponentConsumer = ComponentContext.Consumer
