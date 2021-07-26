import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";
import PictureStacks from "../stacks/PicturesStacks";

export default function Project({ id, name, github }) {
  const { isLoading, data, error } = useQuery(["project", id], () =>
    project.getStacks(id)
  );

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div
      key={id}
      className="border rounded border-gray-900 mx-2 my-2 w-80 h-60 group align-middle "
    >
      <div className="bg-white bg-opacity-20 h-full group-hover:bg-opacity-60 ">
        <Link to={`/project/${id}`}>
          <p className="text-2xl text-gray-800 flex justify-center h-1/4">
            {name}
          </p>
        </Link>
        <div className="flex flex-wrap 2/4">
          {data.map((data) => {
            return (
              <p key={data.id}>
                <PictureStacks {...data} />
              </p>
            );
          })}
        </div>
        <div className="h-1/4">
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
