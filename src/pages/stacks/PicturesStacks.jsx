import React from "react";
import { useQuery } from "react-query";
import { stack } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function PictureStacks({ id }) {
  const { isLoading, data, error } = useQuery(
    ["pictures", id],
    () => stack.getPictures(id),
    { enabled: Boolean(id) }
  );

  if (isLoading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data?.map((data) => {
        return (
          <div key={data.id} className="">
            <img src={data.url} className="w-10 h-10" />
          </div>
        );
      })}
    </div>
  );
}
