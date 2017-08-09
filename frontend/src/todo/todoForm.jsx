import React from 'react'
import Grid from '../template/grid'
import IcoButton from '../template/icoButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}/>
        </Grid>
        <Grid cols='12 3 2'>
            <IcoButton style='primary' icon='plus' onClick={props.handleAdd}></IcoButton>
        </Grid>
    </div>
)