import { useState, useEffect } from "react";

const useSortTasks = (tasks) => {
  const [sortedBy, setSortedBy] = useState("");

  const [sortedTasks, setSortedTasks] = useState(tasks);

  useEffect(() => {
    const sortByDate = (order) => {
      const toMillisseconds = (date) => Date.parse(date);
      const tasksCopy = [...tasks];
      const sorted = tasksCopy.sort((task1, task2) => {
        const date1 = toMillisseconds(task1.date);
        const date2 = toMillisseconds(task2.date);

        if (date1 < date2) {
          return -1;
        }

        if (date1 > date2) {
          return 1;
        }

        return 0;
      });

      if (order === "min-date") {
        return sorted;
      }

      if (order === "max-date") {
        return sorted.reverse();
      }

      return tasks; //se não existir tasks (para não retornar undefined)
    };

    const sortByCompletedStatus = (completed) => {
      const tasksCopy = [...tasks];
      const sorted = tasksCopy.sort((task1) => {
        if (task1.completed) {
          return -1;
        }
        return 0;
      });
      if (completed) {
        return sorted;
      }
      if (!completed) {
        return sorted.reverse();
      }
      return tasks;
    };

    if (sortedBy === "min-date" || sortedBy === "max-date") {
      setSortedTasks(sortByDate(sortedBy));
    }
    if (sortedBy === "" || sortedBy === "order-added") {
      setSortedTasks(tasks);
    }
    if (sortedBy === "completed-first") {
      setSortedTasks(sortByCompletedStatus(true));
    }
    if (sortedBy === "uncompleted-first") {
      setSortedTasks(sortByCompletedStatus(false));
    }
  }, [sortedBy, tasks]);
  return { sortedBy, setSortedBy, sortedTasks };
};

export default useSortTasks;
