import { useState, useEffect, useContext } from "react";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const useTodayTasks = () => {
  const [todaysTasks, setTodaysTasks] = useState([]);
  const { state } = useContext(TasksContext);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    let filteredTasks = state.tasks.filter(
      (task) => task.date === dateTimeFormat
    );
    setTodaysTasks(filteredTasks);
  }, [dateTimeFormat, state.tasks]);
  return todaysTasks;
};

export default useTodayTasks;
