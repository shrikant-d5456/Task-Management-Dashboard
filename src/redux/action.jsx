export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });
  
  export const markTaskComplete = (id) => ({
    type: 'MARK_TASK_COMPLETE',
    payload: id,
  });
  
  export const filterTasks = (filter) => ({
    type: 'FILTER_TASKS',
    payload: filter,
  });