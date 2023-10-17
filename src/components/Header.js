import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())

  }
  return (
    <div className="header-wrapper grid grid-cols-12 gap-4   items-center align-middle shadow-md  h-14 px-4">
      <div className="icon-hamberger-menu flex col-span-3">
        <img
          className="h-8 w-8 cursor-pointer "
          src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-8 w-auto"
          src="https://www.gstatic.com/youtube/img/promos/growth/6ab442d6a1002dcfa655526badce27feecfc743e1fbe9cbb98ed6855a504a898_324x72.png"
        />
      </div>
      <div className="search  px-2  flex  col-span-8">
        <div className="flex  items-center   border border-gray-800 px-4  rounded-tl-2xl rounded-bl-2xl">
          <input className="px-2 flex items-center [all:unset]" placeholder="search" />
        
        </div>
        <div className="border flex items-center px-4 border-t-gray-800 border-b-gray-800 border-r-gray-800 rounded-br-2xl rounded-tr-2xl">  <button>
            <img className="h-6 w-6 opacity-30" src="https://img.icons8.com/?size=30&id=59878&format=png" />
          </button></div>
      </div>
      <div className="userinfo ">
        <div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/?size=30&id=98957&format=png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
