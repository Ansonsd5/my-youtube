import React from "react";
import SideBar from "./SideBar";
import MainConatiner from "./MainConatiner";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-row gap-4">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
