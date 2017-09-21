const tasks = (state = [], action ) => {
  switch(action.type) {
    case 'TASKS':
      return action.tasks
    case 'ADD_TASK':
      return [...state, action.task]
    case 'UPDATE_TASK':
      return state.map( t => {
        if (t.id === action.task.id)
          return action.task
        return t
      })
    case 'DELETE_TASK':
      return state.filter( t => t.id !== action.id )
    default:
      return state;
  }
}

export default tasks;