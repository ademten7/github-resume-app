import React, { useContext, useRef, useEffect } from "react";
import { MyContext } from "../../context/context";
import "./header.css";

const Header = () => {
  const { setUser } = useContext(MyContext);
  const inputRef = useRef();

  useEffect(() => {
    fetchUserProfile("ademten7");
  });

  const fetchUserProfile = async (name) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const result = await response.json();

    setUser(result);
  };

  const searchNewUser = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() !== "") {
      fetchUserProfile(inputRef.current.value);
    }
    // inputRef.current.value = "";
  };

  return (
    <header className="hero-main centered">
      <hr className="line-headers line-head" />
      {/* <span className="underline-header">__</span> */}
      <h1 className="header">MY GITHUB RESUME</h1>
      <form onSubmit={searchNewUser}>
        <label className="sub-header" htmlFor="username">
          GITHUB USERNAME
        </label>
        <input
          className="input-field"
          type="text"
          name="username"
          ref={inputRef}
          autoFocus
        />
        <button className="generate-btn" type="submit">
          GENERATE
        </button>
      </form>
    </header>
  );
};

export default Header;
