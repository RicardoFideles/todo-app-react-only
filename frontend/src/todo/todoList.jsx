import React from 'react'
import IcoButton from '../template/icoButton'
import { connect } from 'react-redux'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''} > {todo.description} </td>
                <td> 
                    <IcoButton style='success' icon='check'   hide={todo.done}  onClick={() => props.handleMarkAsDone(todo)}></IcoButton> 
                    <IcoButton style='danger'  icon='trash-o' hide={!todo.done} onClick={() => props.handleRemove(todo)}></IcoButton> 
                    <IcoButton style='warning' icon='undo'    fhide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}></IcoButton> 


                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list : state.todo.list })

export default connect(mapStateToProps)(TodoList)
