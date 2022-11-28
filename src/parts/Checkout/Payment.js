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
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax {tax}</p>
              <p>Sub total: ${subTotal}</p>
              <p>Total: ${grandTotal}</p>
              <div className="row mt-4">
                <div className="row mt-4">
                  <div className="col-3 text-right">
                    <img src={logoBca} alt="bank central asia" width="60" />
                  </div>
                  <div className="col">
                    <dd>
                      <dl>Bank Central Asia</dl>
                      <dl>1881 9991</dl>
                      <dl>Nashir Jamali</dl>
                    </dd>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3 text-right">
                    <img src={logoMandiri} />
                  </div>
                  <div className="col">
                    <dd>
                      <dl>Bank Mandiri</dl>
                      <dl>9192 1231</dl>
                      <dl>Nashir Jamali</dl>
                    </dd>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pegirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
