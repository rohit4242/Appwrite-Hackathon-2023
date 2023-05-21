import React, { useState, useContext } from "react";

import ModalConfirm from "../Utilities/ModalConfirm";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const DeleteTasks = () => {
  const { dispatch } = useContext(TasksContext);

  const [showModal, setIsModalShown] = useState(false);

  const deleteAllDataHandler = () => {
    dispatch({ type: "DELETE_ALL_DATA" });
  };

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="All data will be deleted permanently."
          onConfirm={deleteAllDataHandler}
        />
      )}
      <button
        className="mt-auto text-left pt-4 hover:text-[#00B3B2] dark:hover:text-slate-200 transition "
        onClick={() => setIsModalShown(true)}
      >
        Delete all data
      </button>
    </>
  );
};

export default React.memo(DeleteTasks);
