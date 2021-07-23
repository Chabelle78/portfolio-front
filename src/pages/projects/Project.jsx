import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function Project({ id, name, github }) {
  const { isLoading, data, error } = useQuery(["project", id], () =>
    project.getStacks(id)
  );

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div key={id} className="border border-coral-default h-40 group mx-4 my-2">
      <div className="bg-red-700 bg-opacity-20 h-full group-hover:bg-opacity-60 flex flex-col">
        <Link to={`/project/${id}`}>
          <p className="text-2xl">{name}</p>
        </Link>
        <div className="flex flex-col justify-between">
          {data.map((data) => {
            return <p key={data.id}>{data.name}</p>;
          })}
        </div>
        <div className="flex items-center">
          <a href={github} target="_blank" key={id}>
            <img
              src="src/pictures/github (1).svg"
              alt="github_link"
              width="25rem"
              className=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
