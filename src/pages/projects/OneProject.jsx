import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { project } from "../../API/request";
import Spinner from "../../spinner/Spinner";

export default function OneProject() {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery(["project", id], () =>
    project.getOne(id)
  );

  return (
    <>
      <p>One projects</p>
    </>
  );
}
