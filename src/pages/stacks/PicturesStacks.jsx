import React from "react";
import { useQuery } from "react-query";
import { stack } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function PictureStacks({ id, name }) {
  const { isLoading, data, error } = useQuery(["pictures", id], () =>
    stack.getPictures(id)
  );

  if (isLoading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-10 h-10">
      {data?.map((data) => {
        return (
          <>
            <img src={data.url} key={data.id} />
          </>
        );
      })}
    </div>
  );
}
