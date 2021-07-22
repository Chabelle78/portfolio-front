import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function Project({ id, name, github }) {
  const { isLoading, data, error } = useQuery(["project", id], () =>
    project.getStacks(id)
  );

  console.log(data);
  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div
      key={id}
      className="border border-red-500  mt-5 pb-2 flex flex-col justify-between items-center"
    >
      <Link to={`/project/${id}`}>
        <p className="text-2xl">{name}</p>
      </Link>
      {data?.map((data) => {
        return <p>{data.name}</p>;
      })}
      <>
        <a href={github} target="_blank">
          <img
            src="src/pictures/github (1).svg"
            alt="github_link"
            width="25rem"
            className=""
          />
        </a>
      </>
    </div>
  );
}
