import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRowos = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={()=> props.handleRemove(todo)} />
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