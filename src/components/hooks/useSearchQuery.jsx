import { useEffect, useState, useContext } from "react";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const useSearchQuery = (searchQuery) => {
  const { state } = useContext(TasksContext);

  const [matchedTasks, setMatchedTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = state.tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (searchQuery.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchQuery, state.tasks]);

  return matchedTasks;
};

export default useSearchQuery;
