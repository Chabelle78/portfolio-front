import React from "react";
import { useQuery } from "react-query";
import { project } from "../../API/request";

export default function PicturesProjects({ id, name }) {
  const { isLoading, data, error } = useQuery(["pictures", id], () =>
    project.getPictures(id)
  );

  console.log(data);

  return (
    <div>
      {data?.map((data) => {
        return <img src={data.url}></img>;
      })}
    </div>
  );
}
