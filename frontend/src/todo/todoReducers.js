const INITIAL_STATE = {
    description: 'read books',
    list:[
        {
            _id: 1,
            description: 'task 1',
            done: true
        },
        {
            _id: 2,
            description: 'task 2',
            done: false
        },
        {
            _id: 3,
            description: 'task 3',
            done: true
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case  'TODO_ADDED': 
            return { ...state, description: ''}
        default:
            return state
    }
}