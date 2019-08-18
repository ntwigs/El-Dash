import * as React from 'react'
import styled from 'styled-components'
import {compose, withState, withHandlers, lifecycle} from 'recompose'
import {ComponentConsumer} from '../context'
import settings from '../../assets/round-settings-24px.svg'
import clear from '../../assets/round-clear-24px.svg'
import Modal from 'react-modal'

const getRandomColor = () => {
  const colors = ['#B8EEDE', '#EEB8E6', '#EBDCB6', '#94C1E1', '#BBE194']
  const randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber]
}

const Button = styled.button`
  cursor: pointer;
  pointer-events: auto;
  width: 264px;
  text-align: right;
  padding: 10px;
  background-color: #34344a;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  color: #bfd4e5;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  &:before {
    content: '.';
    display: flex;
    flex-direction: row;
    items: center;
    z-index: 2;
    width: 11px;
    height: 11px;
    background-color: ${getRandomColor()};
    color: #34344a;
    border-radius: 20px;
  }
  &:after {
    content: '.';
    display: flex;
    flex-direction: row;
    items: center;
    z-index: 2;
    width: 11px;
    height: 11px;
    background-color: ${getRandomColor()};
    color: #34344a;
    border-radius: 20px;
  }
`

const Settings = styled.img`
  width: 25px;
  height: 25px;
  position: fixed;
  margin: 10px;
  border: none;
  border-radius: 10px;
  top: 5px;
  right: ${({isEditorOpen}) => (isEditorOpen ? 150 : 0)}px;
  transition: transform 250ms;
  opacity: ${({isEditorOpen}) => (isEditorOpen ? 0 : 1)};
  cursor: pointer;
  transition: all 250ms;
  z-index: ${({isEditorOpen}) => (isEditorOpen ? 0 : 2)};
`

const Exit = styled.img`
  width: 25px;
  height: 25px;
  position: fixed;
  margin: 10px;
  border: none;
  border-radius: 10px;
  top: 5px;
  right: ${({isEditorOpen}) => (isEditorOpen ? 150 : 0)}px;
  z-index: ${({isEditorOpen}) => (isEditorOpen ? 2 : 0)};
  transition: transform 250ms;
  opacity: ${({isEditorOpen}) => (isEditorOpen ? 1 : 0)};
  cursor: pointer;
  transition: all 250ms;
`

const EditorContainer = ({isEditorOpen, closeEditor}) => (
  <ComponentConsumer>
    {({
      resetComponents,
      addTextComponent,
      addTimeComponent,
      addTodayComponent,
      addWeatherComponent,
      addWeekdayComponent,
      centerAllComponents,
    }) => (
      <Modal
        shouldCloseOnOverlayClick
        style={{
          content: {
            backgroundColor: 'transparent',
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'transparent',
          },
        }}
        onRequestClose={closeEditor}
        isOpen={isEditorOpen}>
        <Button onClick={resetComponents}>Reset</Button>
        <Button onClick={centerAllComponents}>Center</Button>
        <Button onClick={addTextComponent}>Text</Button>
        <Button onClick={addTimeComponent}>Time</Button>
        <Button onClick={addWeatherComponent}>Weather</Button>
        <Button onClick={addWeekdayComponent}>Weekday</Button>
        <Button onClick={addTodayComponent}>Today</Button>
        <Button onClick={() => {}}>Subscribers</Button>
        <Button onClick={() => {}}>Commits</Button>
      </Modal>
    )}
  </ComponentConsumer>
)

const PureEditor = ({openEditor, closeEditor, isEditorOpen}) => (
  <div>
    <EditorContainer isEditorOpen={isEditorOpen} closeEditor={closeEditor} />
  </div>
)

export const Editor = compose(
  withState('isEditorOpen', 'setEditorOpen', false),
  withHandlers({
    openEditor: ({setEditorOpen}) => () => setEditorOpen(true),
    closeEditor: ({setEditorOpen}) => () => setEditorOpen(false),
  }),
  lifecycle({
    componentDidMount() {
      const F_KEY = 102

      window.addEventListener('keypress', ({keyCode}) => {
        if (F_KEY === keyCode) {
          this.props.isEditorOpen
            ? this.props.closeEditor()
            : this.props.openEditor()
        }
      })
    },
  }),
)(PureEditor)
