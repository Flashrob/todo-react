import React from 'react';

class DeletedList extends React.Component {

    eraseHandler(index){
        this.props.eraseCompletelyLift(index)
    }

    render(){

        const allDeletedItems = this.props.deletedList.map((todo, index)=>{

            return <div key={index}>{todo.time} - {todo.todo} <button onClick={(e)=>{this.eraseHandler(index)}}>Remove completely</button></div>

        })

        return (
            <div style={{backgroundColor: "red"}}>
                {allDeletedItems}
            </div>
        )
    }
}

export default DeletedList