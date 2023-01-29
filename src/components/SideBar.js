import React, { useState } from "react";
import { categories } from "../utils/constants";
const SideBar = ({SetSelected,selected}) => {
  const handleOnclick = (selected) => {
    SetSelected(selected);
  };
  return (
    <div className="flex flex-2 sm:flex-col flex-row  sm:h-full h-auto overflow-y-scroll">
      {categories.map((item) => {
        return (
          <button
            className={`text-white flex flex-row justify-start category-btn  ${
              selected === item.name && "bg-red-600 "
            }`}
            key={item.name}
            onClick={() => {
              handleOnclick(item.name);
            }}
          >
            <span className={ `pr-2 ${item.name === selected ? "text-white":"text-red-600"}`}>
              {item.icon}
            </span>
            <p>{item.name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
