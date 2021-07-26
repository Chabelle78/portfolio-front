import React from "react";
import { useQuery } from "react-query";
import { stack } from "../../API/request";
import Spinner from "../../spinner/Spinner";
import PictureStacks from "./PicturesStacks";

export default function Stacks() {
  const { isLoading, data, error } = useQuery("jobs", () => stack.getAll());

  if (isLoading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data?.map((data) => {
        return (
          <div key={data.id}>
            <PictureStacks key={data.id} {...data} />
          </div>
        );
      })}
    </div>
  );
}
