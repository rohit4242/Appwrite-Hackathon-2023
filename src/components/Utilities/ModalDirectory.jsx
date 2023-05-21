import React, { useState, useContext } from "react";
import Modal from "./Modal";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const ModalDirectory = ({ onClose, dirName, onConfirm, btnText, title }) => {
  const { state } = useContext(TasksContext);

  const [errorDirectoryName, setErrorDirectoryName] = useState(false);
  const [newDirName, setNewDirName] = useState(dirName ? dirName : "");

  const checkDirNameExists = (val) => {
    const directoryDoesNotExist = state.directories.every((dir) => dir !== val);

    if (directoryDoesNotExist || dirName === val) {
      setErrorDirectoryName(false);
    } else {
      setErrorDirectoryName(true);
    }
  };

  const confirmDirNameHandler = (e) => {
    e.preventDefault();
    if (errorDirectoryName) return;
    onConfirm(newDirName);
    onClose();
  };

  return (
    <Modal onClose={onClose} title={title}>
      <form className="stylesInputsField">
        <div className="relative">
          <label htmlFor="dir-name" className="">
            Title
          </label>
          <input
            type="text"
            id="dir-name"
            placeholder="Enter a directory name"
            value={newDirName}
            onChange={({ target }) => setNewDirName(target.value)}
            className={`inputStyles block w-full`}
            onInput={({ currentTarget }) =>
              checkDirNameExists(currentTarget.value)
            }
          />
          {errorDirectoryName && (
            <div className="absolute z-20 w-full p-2 text-sm font-medium rounded-md bg-rose-500 text-slate-200 top-full">
              Directory name already exists
            </div>
          )}
        </div>
        <button className="mt-6 btn" onClick={confirmDirNameHandler}>
          {btnText}
        </button>
      </form>
    </Modal>
  );
};

export default ModalDirectory;
