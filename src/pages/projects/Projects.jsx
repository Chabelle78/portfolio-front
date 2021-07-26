import React from "react";
import { useQuery } from "react-query";
import { project, stack } from "../../API/request";
import Spinner from "../../spinner/Spinner";
import Project from "./Project";

export default function Projects() {
  const {
    isLoading: companiesIsLoading,
    data: companiesData,
    error: companiesError,
  } = useQuery("companies", () => project.getAll());

  const {
    isLoading: jobIdIsLoading,
    data: jobIdData,
    error: jobIdError,
  } = useQuery("jobs", () => stack.getAll());

  if (companiesIsLoading || jobIdIsLoading) return <Spinner />;

  const error = companiesError || jobIdError;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl mb-12 pt-20">My projects</h1>
      <div className="flex flex-wrap justify-center">
        {companiesData?.map((data) => {
          return <Project {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
}
