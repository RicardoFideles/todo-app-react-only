import React from 'react'
import Grid from '../template/grid'
import IcoButton from '../template/icoButton'
import { connect } from 'react-redux'

const TodoForm = props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' onKeyUp={keyHandler} className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <IcoButton style='primary' icon='plus' onClick={props.handleAdd}></IcoButton>
                <IcoButton style='info' icon='search' onClick={props.handleSearch}></IcoButton>
                <IcoButton style='default' icon='close' onClick={props.handleClear}></IcoButton>
            </Grid>
        </div>
    )
}


const mapStateToProps = state => ({ description : state.todo.description })

export default connect(mapStateToProps)(TodoForm)