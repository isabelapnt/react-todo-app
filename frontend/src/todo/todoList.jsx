import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { markedAsDone, markedAsPeding, remove } from './todoActions'
import IconButton from '../template/iconButton'

const TodoList = props => {
    
    const renderRowos = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' :  ''}>
                    {todo.description}
                </td>
                <td className='tableActions'>
                    <IconButton style='sucess' icon='check' hide={todo.done}
                        onClick={() => props.markedAsDone(todo)}
                    />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markedAsPeding(todo)}
                    />
                    <IconButton style='danger' icon='trash' hide={!todo.done}
                        onClick={()=> props.remove(todo)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRowos()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markedAsDone, markedAsPeding, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)