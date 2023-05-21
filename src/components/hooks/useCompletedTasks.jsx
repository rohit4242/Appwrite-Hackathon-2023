import { useEffect, useState } from "react";

const useCompletedTasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = props.tasks.filter((task) => {
      if (props.done) {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
    setTasks(filteredTasks);
  }, [props.tasks, props.done]);

  return { tasks };
};

export default useCompletedTasks;
