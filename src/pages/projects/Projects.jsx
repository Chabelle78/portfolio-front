import React from "react";
import { useQuery } from "react-query";
import { project, stack } from "../../API/request";
import Spinner from "../../spinner/Spinner";
import Project from "./Project";

export default function Projects() {
  const {
    isLoading: projectsIsLoading,
    data: projectsDatas,
    error: projectError,
  } = useQuery("projects", () => project.getAll());

  const {
    isLoading: stacksIdIsLoading,
    data: stacksIdData,
    error: stacksIdError,
  } = useQuery("stackss", () => stack.getAll());

  if (projectsIsLoading || stacksIdIsLoading) return <Spinner />;

  const error = projectError || stacksIdError;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl mb-12 pt-20">My projects</h1>
      <div className="flex flex-wrap justify-around">
        {projectsDatas?.map((data) => {
          return <Project {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
}
