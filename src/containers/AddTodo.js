import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo'

class AddTodo extends Component{

    state = {
        text: ''
    }

    handleChange = (e) => {
        // console.log(this.input);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handeClick = () => {
    //     this.props.addTodo(this.state.text)
    // }

    render(){
        const { text } = this.state
        const { addTodo } = this.props
        return (
            <>
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange} ref={node => (this.input = node)}/>
                <button onClick={()=> addTodo(text)}>Dodaj zadanie</button>
            </>
        );
    }
    }

    
    // wychodzi na to ze mozna przekazac w dowolnej formie kwestia pamietac o podczytaniu z probsow

    // const mapDispatchToProps = dispatch => ({
    //     addTodo: (text) => dispatch(addTodo(text))
    // })


    const mapDispatchToProps = {
        addTodo
    }


export default connect(null, mapDispatchToProps)(AddTodo);