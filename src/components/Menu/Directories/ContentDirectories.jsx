import React, { useState, useContext } from "react";
import { TasksContext } from "../../../Context/Tasks/TasksContext";
import ModalDirectory from "../../Utilities/ModalDirectory";
import ItemDirectory from "./ItemDirectory";

const ContentDirectories = ({ classActive }) => {
  const [modalDirIsShown, setModalDirIsShown] = useState(false);
  const { state, dispatch } = useContext(TasksContext);

  const createNewDirectoryHandler = (inputValue) => {
    const newDirectoryName = inputValue.trim();

    if (newDirectoryName.length === 0) return;

    const directoryDoesNotExist = state.directories.every(
      (dir) => dir !== newDirectoryName
    );

    if (directoryDoesNotExist) {
      dispatch({ type: "CREATE_DIRECTORY", payload: newDirectoryName });
    }
  };

  const closeModalDirectoryHandler = () => {
    setModalDirIsShown(false);
  };

  return (
    <>
      {modalDirIsShown && (
        <ModalDirectory
          onClose={closeModalDirectoryHandler}
          onConfirm={createNewDirectoryHandler}
          btnText="Create"
          title="Create new directory"
        />
      )}

      <ul className="overflow-auto max-h-36">
        {state.directories.map((dir) => (
          <ItemDirectory key={dir} classActive={classActive} dir={dir} />
        ))}
      </ul>
      <button
        onClick={() => setModalDirIsShown(true)}
        className="px-3 py-1 mt-2 border-2 border-dashed rounded-md border-slate-300 dark:border-slate-700 ml-9 hover:text-violet-500"
      >
        + New
      </button>
    </>
  );
};

export default ContentDirectories;
