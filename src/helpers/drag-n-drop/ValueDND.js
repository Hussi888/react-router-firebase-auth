import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

import initialData from '../drag-n-drop/Intial-data'
import Column from '../drag-n-drop/Column'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display:flex;
`

const notify = () => {
    toast("Wow so easy!")
};


export default class ValueDnd extends React.Component {
  state = initialData

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }
      this.setState(newState)

      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
        
  }

  render() {
    return (
        <div>
            <DragDropContext onDragEnd={this.onDragEnd}>
            <Container>
            {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId]
                const tasks = column.taskIds.map(
                taskId => this.state.tasks[taskId]
                )

                return (
                <Column key={column.id} column={column} tasks={tasks} />
                )
            })}
            </Container>
            </DragDropContext>
            <br/>
            <button className="btn btn-primary" type="submit" onClick={notify}>Submit Selected Values</button>
            <ToastContainer />
        </div>
    )
  }
}
