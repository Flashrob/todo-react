import React from 'react';
import { hot } from 'react-hot-loader';
const moment = require('moment')
class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todoList: []
    }
  }

  removeHandler(e,i){
    const todoList = this.state.todoList
    todoList.splice(i, 1)
    this.setState({todoList: todoList})
  }

  inputHandler(e){
      let todo = e.target.value
      this.setState({todo: todo})
  }

  submitHandler(e){
    e.preventDefault()
    console.log("before push", this.state.todoList)

    if (this.state.todo.length < 1 || this.state.todo.length > 199){
      
      let warning = "Must be between 1 and 199 characters"
      this.setState({warning: warning})

    } else {

      this.setState({warning: false})
      const todoList = this.state.todoList
      todoList.push({todo: this.state.todo, time: moment().format('MMMM Do YYYY, h:mm:ss a')})
      e.target.elements.input.value = ""
      this.setState({todoList: todoList, todo: ""})

      console.log("after push", this.state.todoList)
    }
  }

  render() {

    const allTodos = this.state.todoList.map((todo, index)=>{
      return <div key={index}><p key={index}>{todo.todo} created: {todo.time} <button onClick={(e)=>{this.removeHandler(e,index)}}>X</button></p></div>
    })

    return (
      <div>
        <form onSubmit={(e)=>{this.submitHandler(e)}}>
          <input type="text" name="input" onChange={(e)=>{this.inputHandler(e)}}></input>
          <button type="submit">Add</button>
          <p style={{color: "red" }}>{this.state.warning}</p>
        </form>
        {allTodos}
      </div>
    );
  }
}

export default hot(module)(App);
