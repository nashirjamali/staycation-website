import React from "react";
import { Fade } from "react-awesome-reveal";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.png";
import logoMandiri from "assets/images/logo-mandiri.png";

export default function Payment({ data, itemDetails, checkout, ...props }) {
  const tax = 10;
  const subTotal = itemDetails.price + checkout.duration;
  const grandTotal = ((subTotal + tax) / 100) * subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-5 border-right py-5"
            style={{ paddingRight: 80 }}
          >
            
          </div>
        </div>
      </div>
    </Fade>
  );
}
