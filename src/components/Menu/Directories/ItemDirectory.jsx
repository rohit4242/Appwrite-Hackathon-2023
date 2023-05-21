import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TasksContext } from "../../../Context/Tasks/TasksContext";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";
import ModalConfirm from "../../Utilities/ModalConfirm";
import ModalDirectory from "../../Utilities/ModalDirectory";

const ItemDirectory = ({ dir, classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  const { dispatch } = useContext(TasksContext);

  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalDirIsShown, setModalDirIsShown] = useState(false);

  const closeModalDirectoryHandler = () => {
    setModalDirIsShown(false);
  };

  const deleteDirectoryHandler = () => {
    dispatch({ type: "DELETE_DIRECTORY", payload: dir });
  };

  const confirmEditDirNameHandler = (dirName) => {
    dispatch({
      type: "EDIT_DIRECTORY_NAME",
      payload: {
        previousDirName: dir,
        newDirName: dirName,
      },
    });
  };

  return (
    <>
      {modalDirIsShown && (
        <ModalDirectory
          onClose={closeModalDirectoryHandler}
          onConfirm={confirmEditDirNameHandler}
          dirName={dir}
          title="Edit directory name"
          btnText="Edit"
        />
      )}
      {modalIsShown && (
        <ModalConfirm
          onClose={() => setModalIsShown(false)}
          onConfirm={deleteDirectoryHandler}
          text="This directory and all its tasks will be deleted."
        />
      )}
      <li
        className={`flex items-center pr-4 pl-9 py-2 itemDirectory ${
          currentPath === "/dir/" + dir ? classActive : ""
        }`}
      >
        <NavLink
          to={`/dir/${dir}`}
          title={dir}
          className="hover:text-[#009F9F] dark:hover:text-slate-200 transition text-ellipsis whitespace-nowrap overflow-hidden max-w-[7rem]"
        >
          {dir}
        </NavLink>

        {dir !== "Main" && (
          <div className="ml-auto buttonsDir">
            <button
              title="edit directory name"
              onClick={() => setModalDirIsShown(true)}
            >
              <Edit className="w-5 h-5 mr-2" />
            </button>
            <button
              title="delete directory"
              onClick={() => setModalIsShown(true)}
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default ItemDirectory;
