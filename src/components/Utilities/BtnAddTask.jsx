import React, { useContext } from "react";
import { ModalContext } from "../../Context/Modal/ModalContext";

const BtnAddTask = ({ className }) => {
  const { dispatch } = useContext(ModalContext);

  const onOpenModal = () => {
    dispatch({ type: "OPEN_MODAL_CREATE_TASK" });
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Add new task
      </button>
    </>
  );
};

export default BtnAddTask;
