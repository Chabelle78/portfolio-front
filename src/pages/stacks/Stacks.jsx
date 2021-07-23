import React from "react";
import { useQuery } from "react-query";
import { stack } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function Stacks() {
  const { isLoading, data, error } = useQuery("jobs", () => stack.getAll());
  console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl mb-12">Stack </h1>

      <div className="grid grid-cols-3 grid-rows-3 ">
        {data?.map((job) => {
          return (
            <div key={job.id}>
              <p>{job.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
