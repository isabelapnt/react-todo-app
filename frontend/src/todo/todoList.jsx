import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRowos = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' :  ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton style='sucess' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}
                    />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}
                    />
                    <IconButton style='danger' icon='trash' hide={!todo.done}
                        onClick={()=> props.handleRemove(todo)}
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