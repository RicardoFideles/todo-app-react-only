import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IcoButton from '../template/icoButton'
import { markAsDone, markAsPending, remove } from '../todo/todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''} > {todo.description} </td>
                <td> 
                    <IcoButton style='success' icon='check'   hide={todo.done}  onClick={() => props.markAsDone(todo)}></IcoButton> 
                    <IcoButton style='danger'  icon='trash-o' hide={!todo.done} onClick={() => props.remove(todo)}></IcoButton> 
                    <IcoButton style='warning' icon='undo'    hide={!todo.done} onClick={() => props.markAsPending(todo)}></IcoButton> 


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
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
