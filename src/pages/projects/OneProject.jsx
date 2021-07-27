import React from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import { project } from "../../API/request";
import EmblaCarousel from "../projects/carousselpictures/EmblaCarrousel";

export default function OneProject() {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery(["project", id], () =>
    project.getOne(id)
  );

  const history = useHistory();

  return (
    <div>
      <h1 className="text-3xl mb-12">{data?.name}</h1>
      <p className=" mx-7 pr-20 my-6">{data?.description}</p>
      <EmblaCarousel />
      <button
        onClick={() => history.goBack()}
        className="focus:outline-none w-28 h-8 sm:text-sm text-xs text-white bg-customGreen px-2 py-1 mt-5 sm:mt-0 sm:p-2 shadow-buttonShadow rounded-md flex justify-center items-center"
      >
        retour
      </button>
    </div>
  );
}
