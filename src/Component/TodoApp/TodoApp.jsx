import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';


class TodoApp extends Component{
    state = {
        todoItems: [
            {id:1, todo: 'hello', completed:false},
            {id:2, todo: 'world', completed:false},
            {id:3, todo: 'Nigeria', completed:false}
        ]
    }

    addTodoHandler = (todo) => {
    
        let todoItems = [...this.state.todoItems];
        let completed = false;

        let todoItem = {todo:todo, completed:completed}
        todoItems.push(todoItem)
        this.setState({
            todoItems:todoItems
        })

    }

    render(){
        return (
            <div>
                <NavBar />
                <TodoForm addTodoHandler={ this.addTodoHandler } />
                <TodoItem todoItems={ this.state.todoItems }/>
            </div>
        );
    }
}

export default TodoApp;