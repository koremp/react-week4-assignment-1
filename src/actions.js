export function changeTaskTitle(taskTitle) {
  return {
    type: 'changeTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: {
      id,
    },
  };
}

export function addTask() {
  return {
    type: 'addTask',
  };
}
