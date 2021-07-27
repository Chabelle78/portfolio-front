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
      className="border rounded border-gray-900 mx-2 my-2 w-100 h-80 group align-middle "
    >
      <div className="bg-gray-200 bg-opacity-10 h-full group-hover:bg-opacity-60 ">
        <div className="flex flex-row justify-around bg-gray-800 py-2">
          <Link to={`/project/${id}`}>
            <p className="text-2xl text-white flex justify-center ">{name}</p>
          </Link>
          <a href={github} target="_blank" key={id}>
            <img
              src="src/pictures/github (1).svg"
              alt="github_link"
              width="25rem"
              className=""
            />
          </a>
        </div>
        <div>IMAGES</div>
        <div className="flex flex-wrap items-center justify-around mx-2">
          {data.map((data) => {
            return (
              <p key={data.id}>
                <PictureStacks {...data} />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
