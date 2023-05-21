import React, { useContext } from "react";
import { ReactComponent as StarLine } from "../../../assets/star-line.svg";
import { TasksContext } from "../../../Context/Tasks/TasksContext";

const BtnMarkAsImportant = ({ taskId, taskImportant }) => {
  const { dispatch } = useContext(TasksContext);

  const markAsImportantHandler = () => {
    dispatch({ type: "MARK_AS_IMPORTANT", payload: taskId });
  };

  return (
    <button
      title={taskImportant ? "unmark as important" : "mark as important"}
      onClick={markAsImportantHandler}
      className="ml-auto transition hover:text-slate-700 dark:hover:text-slate-200"
    >
      <StarLine
        className={`w-5 h-5 sm:w-6 sm:h-6 ${
          taskImportant ? "fill-emerald-300 stroke-emerald-300 " : "fill-none"
        }`}
      />
    </button>
  );
};

export default React.memo(BtnMarkAsImportant);
