import React from 'react'

export default props => {
    
    const renderRowos = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr>
                <td>{todo.description}</td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {renderRowos()}
            </tbody>
        </table>
    )
}