const defaultTasks = [
  {
    title: "Task 1",
    important: false,
    description: "This is the description for this task",
    date: "2023-05-20",
    dir: "Main",
    completed: true,
    id: "t1",
  },
  {
    title: "Task 2",
    important: true,
    description: "This is the description for this task",
    date: "2023-05-20",
    dir: "Main",
    completed: true,
    id: "t2",
  },
  {
    title: "Task 3",
    important: false,
    description: "This is the description for this task",
    date: "2023-05-20",
    dir: "Main",
    completed: false,
    id: "t3",
  },
];

const getSavedDirectories = () => {
  let dirList = [];
  if (localStorage.getItem("directories")) {
    dirList = JSON.parse(localStorage.getItem("directories"));
    const mainDirExists = dirList.some((dir) => dir === "Main");
    if (!mainDirExists) {
      dirList.push("Main");
    }
  } else {
    dirList.push("Main");
  }

  if (localStorage.getItem("tasks")) {
    const savedTasksList = JSON.parse(localStorage.getItem("tasks"));
    let dirNotSaved = [];
    savedTasksList.forEach((task) => {
      if (!dirList.includes(task.dir)) {
        if (!dirNotSaved.includes(task.dir)) {
          dirNotSaved.push(task.dir);
        }
      }
    });
    dirList = [...dirList, ...dirNotSaved];
  }
  return dirList;
};

const initialState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : defaultTasks,
  directories: getSavedDirectories(),
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case "REMOVE_TASK":
      const newTasksList1 = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, tasks: newTasksList1 };
    case "MARK_AS_IMPORTANT":
      const newTasksImportant = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, important: !task.important };
        }
        return task;
      });
      return { ...state, tasks: newTasksImportant };
    case "EDIT_TASK":
      const newTasksEdited = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return { ...state, tasks: newTasksEdited };
    case "TOGGLE_TASK_COMPLETED":
      const newTasksCompleted = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return { ...state, tasks: newTasksCompleted };
    case "DELETE_ALL_DATA":
      return { tasks: [], directories: ["Main"] };
    case "CREATE_DIRECTORY":
      const directoryAlreadyExists = state.directories.includes(action.payload);
      if (directoryAlreadyExists) return state;
      return { ...state, directories: [action.payload, ...state.directories] };
    case "DELETE_DIRECTORY":
      const dirName = action.payload;
      const newDirectories = state.directories.filter((dir) => dir !== dirName);
      const newTasks = state.tasks.filter((task) => task.dir !== dirName);
      return { ...state, directories: newDirectories, tasks: newTasks };
    case "EDIT_DIRECTORY_NAME":
      const { newDirName, previousDirName } = action.payload;
      const directoryExists = state.directories.includes(newDirName);
      if (directoryExists) return state;
      const newDirectoriesList = state.directories.map((dir) => {
        if (dir === previousDirName) {
          return newDirName;
        }
        return dir;
      });
      const newTasksList = state.tasks.map((task) => {
        if (task.dir === previousDirName) {
          return { ...task, dir: newDirName };
        }
        return task;
      });
      return {
        ...state,
        directories: newDirectoriesList,
        tasks: newTasksList,
      };
    default:
      return state;
  }
};

export { initialState, tasksReducer };
