import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarrousselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import "../carousselpictures/embla.css";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { project } from "../../../API/request";

const EmblaCarousel = ({ id }) => {
  // const SLIDE_COUNT = 6;
  // const slides = Array.from(Array(data.length).keys());

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const { isLoading, data, error } = useQuery(
    ["pictures", { projectId: id }],
    () => project.getPictures(id),
    { enabled: Boolean(id) }
  );
  console.log(id);
  console.log(data);
  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {data?.map((data) => (
              <div className="embla__slide" key={data.id}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={data.url}
                    alt="project-pictures"
                  />
                  );
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
