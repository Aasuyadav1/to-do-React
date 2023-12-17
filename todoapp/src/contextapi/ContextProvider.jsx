import React, { createContext } from "react";

let contextProvider = ({ children }) => {
  let allToDoData = [
    {
      id: 6564,
      descriptions: "dfbjdkvcd", // Corrected typo here
    },
  ];

  return (
    <createContext.Provider value={allToDoData}>
      {children}
    </createContext.Provider>
  );
};

export default contextProvider;
