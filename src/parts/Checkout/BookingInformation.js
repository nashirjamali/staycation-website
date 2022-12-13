import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { InputText } from 'elements/Form';

export default function BookingInformation({
  data,
  itemDetails,
  checkout,
  ...props
}) {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5 border-right py-lg-5 mb-5 mb-lg-0" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${itemDetails.imageId[0].imageUrl}`}
                    alt={itemDetails.title}
                  />
                </figure>
                <div className="row align-item-center">
                  <div className="col-12 col-lg">
                    <div className="meta-wrapper">
                      <h5>{itemDetails.title}</h5>
                      <span className="text-gray-500">
                        {itemDetails.city}, {itemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-auto">
                    <span>
                      ${+checkout.duration * itemDetails.price}
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {itemDetails.unit}
                      {+checkout.duration > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-lg-5 py-lg-5 px-4 px-lg-0 " style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                type="tel"
                name="phone"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
