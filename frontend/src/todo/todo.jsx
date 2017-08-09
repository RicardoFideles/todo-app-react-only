import React, {Component} from 'react'
import axios  from 'axios';

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'


class TodoComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="starter-template">
                    <PageHeader name="Tarefas" small="cadastro"></PageHeader>
                    <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd}></TodoForm>
                    <TodoList list={this.state.list} handleRemove={this.handleRemove}></TodoList>
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = { description : '', list : [] };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list : resp.data}));
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, {description})
        .then(resp => this.refresh());
    }

    handleRemove (todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh());
    }

    handleChange (e) {        
        this.setState({...this.state, description : e.target.value})
    }
}

export default TodoComponent

