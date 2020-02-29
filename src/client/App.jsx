import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment'

import Form from './components/form/form'
import ItemList from './components/item-list/item-list'
import DeletedList from './components/deleted-list/deleted-list'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todoList: [],
      input: "",
      deletedArray: []
    }
  }

  submitLift(e){

    const todoList = this.state.todoList

    const filteredTodoList = todoList.filter((todo)=>{

      const time = moment(moment().format()).diff(todo.time, 'seconds')

      return time < 20

    })

    filteredTodoList.push({todo: this.state.input, time: moment().format()})
    this.setState({todoList: filteredTodoList, input: ""})

  }

  inputLift(e){
    this.setState({input: e.target.value})
  }

  deleteLift(todoIndex){
    const deletedItem = this.state.todoList[todoIndex]
    const deletedArray = this.state.deletedArray
    deletedArray.push(deletedItem)

    const todoList = this.state.todoList

    todoList.splice(todoIndex, 1)
    this.setState({todoList: todoList, deletedArray: deletedArray})
  }

  eraseCompletelyLift(eraseCompletelyIndex){
    const deletedArray = this.state.deletedArray

    deletedArray.splice(eraseCompletelyIndex, 1)
    this.setState({deletedArray: deletedArray})
  }

  render() {
    
    return (
      <div>
        <Form inputLift={(e)=>{this.inputLift(e)}} submitLift={(e)=>{this.submitLift(this.state.input)}}/>
        <ItemList todoList={this.state.todoList} deleteLift={(e)=>{this.deleteLift(e)}}/>
        <DeletedList eraseCompletelyLift={(e)=>{this.eraseCompletelyLift(e)}} deletedList={this.state.deletedArray}/>
      </div>
    );
  }
}

export default hot(module)(App);
