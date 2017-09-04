import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IcoButton from '../template/icoButton'
import { clear, add, changeDescription, search } from './todoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }


    keyHandler(e)  {
        const { clear, add , search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { clear, add , search, description } = this.props

        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IcoButton style='primary' icon='plus' onClick={ () => add(description) }></IcoButton>
                    <IcoButton style='info' icon='search' onClick={ search }></IcoButton>
                    <IcoButton style='default' icon='close' onClick={ () => clear() }></IcoButton>
                </Grid>
            </div>
        )

    }

}


const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ clear, add, changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)