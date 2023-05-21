import React, { useContext } from "react";
import { MenusContext } from "../../Context/Menus/MenusContext";
import BtnAddTask from "../Utilities/BtnAddTask";
import Directories from "./Directories/Directories";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";

const classLinkActive =
  "text-[#009F9F] bg-[#edd5d3] border-r-4 border-[#00B3B2] dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Menu = () => {
  const { state, dispatch } = useContext(MenusContext);

  const closeMenuHandler = () => {
    dispatch({ type: "CLOSE_MENU_HEADER" });
  };

  return (
    <LayoutMenus
      menuOpen={state.menuHeaderOpened}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <header className="flex flex-col h-full">
        <h1 className="hidden mt-8 text-lg font-bold tracking-wide text-center uppercase xl:block">
          To-do list
        </h1>
        <BtnAddTask className="mx-4 my-8" />
        <NavLinks classActive={classLinkActive} />
        <Directories classActive={classLinkActive} />
      </header>
    </LayoutMenus>
  );
};

export default Menu;
