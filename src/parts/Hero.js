import React from 'react';
import { Fade } from 'react-awesome-reveal';

import ImageHero from '../assets/images/img-hero.png';
import ImageHeroFrame from '../assets/images/img-hero-frame.png';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade direction='bottom'>
      <section className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="h1 font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: '170%' }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onclick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width={36}
                  height={36}
                  src="images/icons/icon_traveler.svg"
                  alt={`${formatNumber(props.data.travelers)} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width={36}
                  height={36}
                  src="images/icons/icon_treasure.svg"
                  alt={`${formatNumber(props.data.treasures)} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width={36}
                  height={36}
                  src="images/icons/icon_cities.svg"
                  alt={`${formatNumber(props.data.cities)} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                className="img-fluid position-absolute"
                src={ImageHero}
                alt="Room with couches"
                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
              />
              <img
                className="img-fluid position-absolute"
                src={ImageHeroFrame}
                alt="Room with couches frame"
                style={{ margin: '-5px 0 0 -5px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
