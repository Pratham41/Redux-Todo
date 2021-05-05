const initialData = {
  taskItems: [],
};

const taskReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload],
      };

    case 'DELETE_TASK':
      return {
        ...state,
        taskItems: state.taskItems.filter((task) => task != action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        taskItems: state.taskItems.map((task) => {
          if (task == action.payload.oldtask) task = action.payload.newtask;
          return task;
        }),
      };
  }

  return state;
};

export default taskReducer;
