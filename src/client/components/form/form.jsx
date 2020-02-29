import React from 'react';



class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            warning: "",
        }
    }

    submitHandler(e){
        e.preventDefault()
        let inputLength = e.target.elements.input.value.length
        let inputValue = e.target.elements.input.value
        if (inputLength < 1 || inputLength > 199){

            let warning = "Must be between 1 and 199 characters"
            this.setState({warning: warning})
    
        } else {

            this.setState({warning: false})
            e.target.elements.input.value = ""
            this.props.submitLift(inputValue)
            
        }
    }

    inputHandler(e){
        console.log(e.target.value)
        this.props.inputLift(e)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.submitHandler(e)}}>
                    <input type="text" name="input" onChange={(e)=>{this.inputHandler(e)}}></input>
                    <button type="submit">Add</button>
                    <p style={{color: "red" }}>{this.state.warning}</p>
                </form>
            </div>
        )
    }
}

export default Form