import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function Project({ id, name, stack, github }) {
  const { isLoading, data, error } = useQuery(["project", id], (id) =>
    project.getStacks(id)
  );

  console.log(data);

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div key={id} className="border border-red-500 rounded-r-full mt-5 pb-2">
      <Link to={`/project/${id}`}>
        <p>{name}</p>
        <p>{stack}</p>
      </Link>
      <>
        <a href={github} target="_blank">
          <img
            src="src/pictures/github (1).svg"
            alt="github_link"
            width="25rem"
          />
        </a>
      </>
    </div>
  );
}
