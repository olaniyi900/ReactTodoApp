import React, { Component } from 'react';
import './todoform.css';

class TodoForm extends Component{
    state = {
        text: ''
    } 

    changeHandler = (e) =>{
        this.setState({
            text: e.target.value
        })
    }




    render(){

        return(
           <React.Fragment>
                <form className="todoform">
                    <div className="form-row">
                        <div className="col-8">
                        <input 
                            onChange={this.changeHandler}
                            type="text" 
                            className="form-control" 
                            placeholder="Input Todo" 
                            value={this.state.text}
                        />
                        </div>
                        <div className="col-4">
                        <button onClick={ (todo) => this.props.addTodoHandler(this.state.text) } type="button" className="btn btn-outline-success btn-block">AddTodo</button>
                        </div>
                    </div>
                </form>
                
            </React.Fragment>
        );
    }
}

export default TodoForm;