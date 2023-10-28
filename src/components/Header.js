import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, searchIcon } from "../utils/constants";
import "./index.css";

const Header = () => {
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestedList, setSuggestedList] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const inputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestion(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestedList(jsonData[1]);
  };

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
          alt="youtube"
        />
      </div>
      <div className="search  flex  col-span-8 col-start-4 relative items-center justify-center w-fit">
        <div className="search-bar relative flex  items-center   border border-gray-800 px-4  rounded-tl-2xl rounded-bl-2xl from-orange-600">
          <input
            className="px-2 flex items-center [all:unset]"
            placeholder="search"
            type="text"
            value={searchQuery}
            onChange={(e) => inputHandler(e)}
            data-aria-haspopup={suggestedList.length >1 ? true : false }
          />
        </div>
        <div className="border flex items-center px-4 border-t-gray-800 border-b-gray-800 border-r-gray-700 rounded-br-2xl rounded-tr-2xl">
          {" "}
          <button>
            <img
              className="h-6 w-6 opacity-30"
              src="https://img.icons8.com/?size=30&id=59878&format=png"
            />
          </button>
        </div>
        <div
          className=" absolute top-7 flex justify-center text-center width-available z-10 bg-slate-300  rounded-lg"
          data-show={false ? showSuggestions : !showSuggestions}
        >
          <ul className="  width-available text-left " id="suggestionlist">
            {suggestedList.map((list) => (
              <li
                key={list}
                className="font-bold py-2 text-sm text-left flex justify-start gap-2 cursor-pointer  box-shadow items-center"
              >
                <img src={searchIcon} className="px-2 "/>
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="userinfo">
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
