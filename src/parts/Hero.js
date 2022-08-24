import React from "react";

import ImageHero from "../assets/images/img-hero.png";
import ImageHeroFrame from "../assets/images/img-hero-frame.png";
import IconCities from "../assets/images/icons/icon_cities.svg";
import IconTraveler from "../assets/images/icons/icon_traveler.svg";
import IconTreasure from "../assets/images/icons/icon_treasure.svg";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offset - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div className="col-auto pr-5" style={{ width: 422 }}>
        <h1 className="h2 font-weight-bold line-height-1 mb-3">
          Forget Busy Work, <br />
          Start Next Vacation
        </h1>
        <p className="mb-5 font-weight-light text-gray-500 w-75">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <Button
          className="btn px-5"
          hasShadow
          isPrimary
          onclick={showMostPicked}
        >
          Show Me Now
        </Button>
        <div className="row mt-5">
          <div className="col-auto">
            <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
            <h6 className="mt-3">
                {props.data.travelers} <span className="text-gray-500 font-weight-light">Travelers</span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
