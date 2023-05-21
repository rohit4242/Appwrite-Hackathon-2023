import React, { useContext } from "react";
import AccountData from "../components/AccountSection/AccountData";
import Footer from "../components/Footer";
import Menu from "../components/Menu/Menu";
import TasksSection from "../components/TasksSection/TasksSection";
import ModalCreateTask from "../components/Utilities/ModalTask";
import { ModalContext } from "../Context/Modal/ModalContext";
import { TasksContext } from "../Context/Tasks/TasksContext";
const Dashboard = () => {
  const { state: modalState, dispatch: modalDispatch } =
    useContext(ModalContext);
  const { dispatch: tasksDispatch } = useContext(TasksContext);

  const closeModalCreateTask = () => {
    modalDispatch({ type: "CLOSE_MODAL_CREATE_TASK" });
  };

  const createNewTaskHandler = (task) => {
    tasksDispatch({ type: "ADD_NEW_TASK", payload: task });
  };

  return (
    <div className="bg-[#c4d1e1] min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-lg sm:text-base text-base">
      {modalState.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <TasksSection />
      <Footer />
      <AccountData />
    </div>
  );
};

export default Dashboard;
