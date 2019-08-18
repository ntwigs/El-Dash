import * as React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import {v1 as uuid} from 'uuid'
import {components} from '../util/components'
import store from 'store'

const COMPONENT_STRING = 'components'

const ComponentContext = React.createContext()

const PureComponentProvider = ({
  components,
  resetComponents,
  addTextComponent,
  addTimeComponent,
  addTodayComponent,
  addWeatherComponent,
  addWeekdayComponent,
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
      addTodayComponent,
      addWeatherComponent,
      addWeekdayComponent,
      updatePosition,
      centerAllComponents,
    }}>
    {children}
  </ComponentContext.Provider>
)

const addWeatherComponent = ({
  components: oldComponents,
  setComponents,
}) => () => {
  const updatedComponents = [
    ...oldComponents,
    {
      type: components.weather,
      position: {x: 50, y: 50},
      id: uuid(),
    },
  ]
  store.set(COMPONENT_STRING)
  setComponents(updatedComponents)
}

const addWeekdayComponent = ({components: oldComponents, setComponents}) => () => {
  const updatedComponents = [
    ...oldComponents,
    {
      type: components.date,
      position: {x: 50, y: 50},
      id: uuid(),
    },
  ]
  store.set(COMPONENT_STRING)
  setComponents(updatedComponents)
}

const addTodayComponent = ({
  components: oldComponents,
  setComponents,
}) => () => {
  const updatedComponents = [
    ...oldComponents,
    {
      type: components.today,
      position: {x: 50, y: 50},
      id: uuid(),
    },
  ]
  store.set(COMPONENT_STRING)
  setComponents(updatedComponents)
}

const addTimeComponent = ({components: oldComponents, setComponents}) => () => {
  const updatedComponents = [
    ...oldComponents,
    {
      type: components.time,
      position: {x: 50, y: 50},
      id: uuid(),
    },
  ]
  store.set(COMPONENT_STRING)
  setComponents(updatedComponents)
}

const addTextComponent = ({components: oldComponents, setComponents}) => () => {
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
}

const centerAllComponents = ({components, setComponents}) => () => {
  const updatedComponents = components.map(({position, ...rest}) => ({
    position: {x: 0, y: 0},
    ...rest,
  }))
  store.set(COMPONENT_STRING, updatedComponents)
  setComponents(updatedComponents)
}

const updatePosition = ({components, setComponents}) => ({id, e}) => {
  const {x, y} = e
  const updatedComponents = components.map(
    component =>
      id === component.id ? {...component, position: {x, y}} : component,
  )
  store.set(COMPONENT_STRING, updatedComponents)
  setComponents(updatedComponents)
}

const resetComponents = ({setComponents}) => () => {
  store.remove(COMPONENT_STRING)
  setComponents([])
}

export const ComponentProvider = compose(
  withState(
    COMPONENT_STRING,
    'setComponents',
    store.get(COMPONENT_STRING) || [],
  ),
  withHandlers({
    resetComponents,
    addWeatherComponent,
    addWeekdayComponent,
    addTimeComponent,
    addTodayComponent,
    addTextComponent,
    centerAllComponents,
    updatePosition,
  }),
)(PureComponentProvider)

export const ComponentConsumer = ComponentContext.Consumer
