import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import { v4 as uuidv4 } from "uuid";
import "./repositories.css";
const Repositories = () => {
  const { user, repositories, setRepositories } = useContext(MyContext);

  let totalNumberOfLanguages = 0;
  const languagesNameArray = [];
  const languagesNumberArray = [];

  useEffect(() => {
    fetchRepositories();
  }, [user]);

  const fetchRepositories = async () => {
    const response = await fetch(
      `https://api.github.com/users/${user ? user.login : "ademten7"}/repos`
    );
    const result = await response.json();

    setRepositories(result);
  };

  const languagesObject = repositories.reduce((acc, repo) => {
    if (acc[repo.language]) {
      acc[repo.language]++;
    } else {
      acc[repo.language] = 1;
    }
    return acc;
  }, {});

  for (const [key, value] of Object.entries(languagesObject)) {
    totalNumberOfLanguages += value;
    languagesNameArray.push(key);
    languagesNumberArray.push(value);
  }

  return (
    <section className="language-repos">
      <section className="languages-container">
        <div className=" language-centered centered">
          <hr className="line-headers" />
          <h1 className="header">LANGUAGES</h1>
        </div>

        <div className="languages centered">
          {languagesNameArray &&
            languagesNameArray.map((name, index) => {
              return name !== "null" ? (
                <div classname="language-progress" key={uuidv4()}>
                  <h2
                    className="sub-header"
                    style={{ color: "rgb(195, 11, 11)" }}
                  >
                    {`${name} `}
                    {(
                      (languagesNumberArray[index] / totalNumberOfLanguages) *
                      100
                    ).toFixed(0)}
                    %
                  </h2>
                  <progress
                    value={
                      (languagesNumberArray[index] / totalNumberOfLanguages) *
                      100
                    }
                    max="100"
                  ></progress>
                </div>
              ) : (
                <div className="language-progress" key={uuidv4()}>
                  <h2
                    className="sub-header"
                    style={{ color: "rgb(195, 11, 11)" }}
                  >
                    {`Other Languages `}
                    {(
                      (languagesNumberArray[index] / totalNumberOfLanguages) *
                      100
                    ).toFixed(0)}
                    %
                  </h2>
                  <progress
                    value={
                      (languagesNumberArray[index] / totalNumberOfLanguages) *
                      100
                    }
                    max="100"
                  ></progress>
                </div>
              );
            })}
        </div>
      </section>

      <section className="repos">
        <div className="repos-header centered">
          <hr className="line-headers" />
          <h1 className="header">POPULAR REPOSITORIES</h1>
        </div>
        <div className="popular-repos-container">
          {repositories &&
            repositories.map((repo) => {
              return (
                (repo.forks > 0 || repo.stargazers_count > 0) && (
                  <article
                    className="popular-repos centered"
                    // style={
                    //   index % 2 === 0
                    //     ? { backgroundColor: "gray" }
                    //     : { backgroundColor: "white" }
                    // }
                    key={uuidv4()}
                  >
                    <div className="repo-name-date">
                      <h2 className="sub-header repo-name">
                        {repo.name.toUpperCase()}
                      </h2>
                      <h2 className="sub-header">
                        {repo.pushed_at.split("-")[0]}-
                        {repo.updated_at.split("-")[0]}
                      </h2>
                    </div>
                    <p>
                      {repo.language !== null ? `${repo.language}-` : ""}
                      {repo.private ? "Private" : "Public"}
                    </p>
                    <p>
                      {repo.description !== null
                        ? repo.description
                        : "No Description"}
                    </p>
                    <p>
                      This repository has {repo.stargazers_count} stars and{" "}
                      {repo.forks} forks. If you would like more information and
                      my contributed code, please visit{" "}
                      <a href={repo.html_url}>{repo.html_url}</a> on GitHub
                    </p>
                  </article>
                )
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default Repositories;
