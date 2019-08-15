import * as React from 'react'
import styled from 'styled-components'
import {compose, withState, withHandlers} from 'recompose'
import {ComponentConsumer} from '../context'
import settings from '../../assets/round-settings-24px.svg'
import clear from '../../assets/round-clear-24px.svg'

const getRandomColor = () => {
  const colors = ['#B8EEDE', '#EEB8E6', '#EBDCB6', '#94C1E1', '#BBE194']
  const randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber]
}

const StyledEditorContainer = styled.div`
  transition: all 250ms;
  position: fixed;
  top: 0;
  right: ${({isEditorOpen}) => (isEditorOpen ? 0 : '-100%')};
  height: 100%;
  z-index: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  cursor: pointer;
  width: 132px;
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

const EditorContainer = ({isEditorOpen}) => (
  <ComponentConsumer>
    {({
      resetComponents,
      addTextComponent,
      addTimeComponent,
      addWeatherComponent,
      addTimeTextComponent,
      addDateComponent,
      centerAllComponents,
    }) => (
      <StyledEditorContainer isEditorOpen={isEditorOpen}>
        <Button onClick={resetComponents}>Reset</Button>
        <Button onClick={centerAllComponents}>Center</Button>
        <Button onClick={addTextComponent}>Text</Button>
        <Button onClick={addTimeComponent}>Time</Button>
        <Button onClick={addWeatherComponent}>Weather</Button>
        <Button onClick={addDateComponent}>Weekday</Button>
        <Button onClick={addTimeTextComponent}>Subscribers</Button>
        <Button onClick={addTextComponent}>Commits</Button>
      </StyledEditorContainer>
    )}
  </ComponentConsumer>
)

const PureEditor = ({
  openEditor,
  closeEditor,
  isEditorOpen,
}) => (
  <div>
    <Settings
      src={settings}
      alt="settings"
      onClick={openEditor}
      isEditorOpen={isEditorOpen}
    />
    <Exit
      src={clear}
      alt="clear"
      onClick={closeEditor}
      isEditorOpen={isEditorOpen}
    />
    <EditorContainer isEditorOpen={isEditorOpen} />
  </div>
)

export const Editor = compose(
  withState('isEditorOpen', 'setEditorOpen', false),
  withHandlers({
    openEditor: ({setEditorOpen}) => () => setEditorOpen(true),
    closeEditor: ({setEditorOpen}) => () => setEditorOpen(false),
  }),
)(PureEditor)
