import { watchImg, rightImg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoSlides from "./VideoSlides";
const Featured = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <div className="mb-12 w-full flex  items-end justify-between">
          <h2 id="title" className="section-heading">
            Get the highlights.
          </h2>
        <div className="flex flex-wrap items-end gap-5">
          <a href="#" className="link">
            Watch the film
            <img src={watchImg} alt="play button" className="ml-2" />
          </a>
          <a href="#" className="link">
            Watch the event
            <img src={rightImg} alt="go to event" className="ml-2" />
          </a>
        </div>
        </div>
        <VideoSlides />
      </div>
    </section>
  );
};

export default Featured;
