import React from 'react';
import { hot } from 'react-hot-loader';

class ItemList extends React.Component {

    clickHandler(e){
        this.props.deleteLift(e)
    }

    render(){

        const allTodos = this.props.todoList.map((todo, index)=>{

            return <div key={index}>{todo.time} - {todo.todo} <button onClick={(e)=>{this.clickHandler(index)}}>X</button></div>

        })

        return (
            <div>
                {allTodos}
            </div>
        )
    }
}

export default ItemList