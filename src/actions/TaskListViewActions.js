export const finishTask = atIndex => {
  return { type: "FINISH_TASK", atIndex };
};

export const deleteTask = atIndex => {
  return { type: "DELETE_TASK", atIndex };
};

export const addTask = taskName => {
  return {
    type: "ADD_TASK",
    taskName: taskName
  };
};

export const viewTaskDetail = atIndex => {
  return { type: "VIEW_TASK", atIndex };
};

export const changeStatusTask = (index, status) => {
  return {
    type: "CHANGE_STATUS_TASK",
    atIndex: index,
    status
  };
};
