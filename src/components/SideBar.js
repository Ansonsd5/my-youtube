import React from "react";
import { sidebarConfig } from "../config";

const SideBar = () => {
  return (
    <div className="text-xl px-2 py-1 flex flex-col gap-2">
      {sidebarConfig.map((sidelist, index) => (
        <>
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
        </>
      ))}
    </div>
  );
};

export default SideBar;
