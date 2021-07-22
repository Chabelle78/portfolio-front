import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function OneProject() {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery(["project", id], (id) =>
    project.getOne(id)
  );

  console.log(data);

  return (
    <>
      {data?.map((data) => {
        return <h1>{data.name} </h1>;
      })}
    </>
  );
}
