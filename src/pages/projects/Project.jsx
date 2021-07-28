import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";
import PictureStacks from "../stacks/PicturesStacks";

export default function Project({ id, name, github }) {
  const { isLoading, data, error } = useQuery(
    ["stacks", { projectId: id }],
    () => project.getStacks(id),
    { enabled: Boolean(id) }
  );

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <div
      key={id}
      className=" border rounded border-gray-900 mx-2 my-2 w-1/3 h-3/4 group "
    >
      <div className="bg-gray-200 bg-opacity-10 h-full flex flex-col group-hover:bg-opacity-60 ">
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
        <div className="h-1/2 w-full bg-pink-400">
          <img
            src="src/pictures/im4.jpg"
            alt="laplusbelle"
            className="w-full"
          />
        </div>
        <div className="h-1/2 grid grid-cols-5 gap-1 p-5">
          {data?.map((data) => {
            return (
              <div key={data.id}>
                <PictureStacks {...data} key={data.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
