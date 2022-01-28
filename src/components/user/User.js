import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import "./user.css";

const User = () => {
  const { user } = useContext(MyContext);

  return (
    <section className="user centered">
      <hr className="line-headers" />
      {user && (
        <>
          <div className="user-header">
            <h1 className="header">{user.name}</h1>
            <h2 className="sub-header">A PASSIONATE GITHUB USER</h2>
            <a href={user.html_url}>{user.html_url}</a>
          </div>
          <p className="description">
            On GitHub since {user.created_at.split("-")[0]}, {` `}
            {user && user.name.toUpperCase()} is a developer based in{" "}
            {user.location} with{" "}
            <span style={{ color: "rgb(195, 11, 11)" }}>
              {user.public_repos}
              {` `}
              public repositories
            </span>{" "}
            and
            <span style={{ color: "rgb(195, 11, 11)" }}>
              {` `}
              {user.followers} followers.
            </span>{" "}
          </p>
        </>
      )}
    </section>
  );
};

export default User;
