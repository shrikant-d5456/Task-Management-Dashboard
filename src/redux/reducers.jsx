const initialState = {
    tasks: [
      { id: 1, title: 'Task 1', description: 'Task 1 description', dueDate: '2023-12-02', completed: false },
    { id: 2, title: 'Task 2', description: 'Task 2 description', dueDate: '2023-12-03', completed: true },
    ],
    filteredTasks: [],
  filter: 'all'
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case 'MARK_TASK_COMPLETE':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: true } : task
          ),
        };
        case 'FILTER_TASKS':
          const filteredTasks = state.tasks.filter((task) => {
            const filterValue = action.payload.toLowerCase();
            return [
              'all',
              'completed',
              'pending',
              'overdue',
            ].includes(filterValue) && (
              filterValue === 'all' ||
                (filterValue === 'completed' && task.completed) ||
                (filterValue === 'pending' && !task.completed) ||
                (filterValue === 'overdue' && !task.completed && new Date(task.dueDate) < new Date())
            );
          });
          return { ...state, filteredTasks };
      default:
        return state;
    }
  };
  
  export default tasksReducer;