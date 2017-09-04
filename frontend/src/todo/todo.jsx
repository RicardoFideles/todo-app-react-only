import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div className="container">
        <div className="starter-template">
            <PageHeader name="Tarefas" small="cadastro"></PageHeader>
            <TodoForm />
            <TodoList />
        </div>
    </div>
)

