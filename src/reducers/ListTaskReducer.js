// State
let appState = {
  data: [
    { title: "Go to the office", isFinished: false },
    { title: "Prepare tasks for today", isFinished: false },
    { title: "Team meeting", isFinished: false },
    { title: "Commit tasks ", isFinished: false }
  ]
};

const taskListReducer = (state = appState, action) => {
  let newTaskList = state.data;
  switch (action.type) {
    case "ADD_TASK":
      const newTask = { title: action.taskName, isFinished: false };
      return { ...state, data: [...newTaskList, newTask] };

    case "FINISH_TASK":
      newTaskList[action.atIndex].isFinished = true;
      return { ...state, data: newTaskList };

    case "DELETE_TASK":
      newTaskList = newTaskList.filter((item, i) => i !== action.atIndex);
      return { ...state, data: newTaskList };
  }
  return state;
};

export default taskListReducer;
