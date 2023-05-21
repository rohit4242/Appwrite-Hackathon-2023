import React, { useState, useContext } from "react";
import ModalConfirm from "../../Utilities/ModalConfirm";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { TasksContext } from "../../../Context/Tasks/TasksContext";

const BtnDeleteTask = ({ taskId }) => {
  const [showModal, setIsModalShown] = useState(false);
  const { dispatch } = useContext(TasksContext);

  const removeTaskHandler = () => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };
  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="This task will be deleted permanently."
          onConfirm={removeTaskHandler}
        />
      )}
      <button
        onClick={() => setIsModalShown(true)}
        title="delete task"
        className="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200"
      >
        <Trash className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </>
  );
};

export default React.memo(BtnDeleteTask);
