import React, { useState } from "react";
import { MyContext } from "./context";

const Container = ({ children }) => {
  const [user, setUser] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [repositories, setRepositories] = useState([]);
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        languages,
        setLanguages,
        repositories,
        setRepositories,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Container;
