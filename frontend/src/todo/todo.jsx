import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://localhost:3003/api/todos'

export default props => (
    <div>
        <PageHeader name='Todos' small="register" />
        <TodoForm />
        <TodoList />
    </div>
)