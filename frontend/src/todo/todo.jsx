import React, {Component} from 'react'
import axios  from 'axios';

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'


class TodoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { description : '', list : [] };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list : resp.data}));
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, {description})
        .then(resp => this.refresh());
    }

    handleRemove (todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description));
    }

    handleChange (e) {        
        this.setState({...this.state, description : e.target.value})
    }

    handleMarkAsDone (todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending (todo) {
         axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description));
    }

    handleSearch () {
        this.refresh(this.state.description);
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div className="container">
                <div className="starter-template">
                    <PageHeader name="Tarefas" small="cadastro"></PageHeader>
                    <TodoForm description={this.state.description} 
                                handleChange={this.handleChange} 
                                handleSearch={this.handleSearch}
                                handleClear={this.handleClear}
                                handleAdd={this.handleAdd}>

                    </TodoForm>
                    <TodoList list={this.state.list} 
                                handleRemove={this.handleRemove} 
                                handleMarkAsPending={this.handleMarkAsPending} 
                                handleMarkAsDone={this.handleMarkAsDone}>
                    </TodoList>
                </div>
            </div>
        )
    }
}

export default TodoComponent

