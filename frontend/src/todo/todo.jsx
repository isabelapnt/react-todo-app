import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default class Todo extends Component{
    render(){
        return (
            <div>
                <PageHeader name='Todos' small="register" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}