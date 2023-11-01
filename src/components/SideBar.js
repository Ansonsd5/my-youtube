import React from "react";
import { sidebarConfig } from "../config";
import { useSelector, useStore } from "react-redux";

const SideBar = () => {

  const ismenuOpen = useSelector((store) => store.app.ismenuOpen);
 
//early return
  if(!ismenuOpen) return null;
  
  return (
    <div className="text-xl px-2 py-1 flex flex-col gap-2">
      {sidebarConfig.map((sidelist, index) => (
        <div key={index*"3"}>
          {sidelist.id === "subscriptions" || sidelist.id === "watchLater" ? (
            <div className="font-bold pt-4" key={index}>
              <div> </div>
              {sidelist.label}
            </div>
          ) : (
            <div className=" " key={index}>
              <div> </div>
              {sidelist.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
