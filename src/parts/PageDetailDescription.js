import React from "react";
import ReactHTMLParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHTMLParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width="30"
                className="d-block mb-2"
                src={feature.imageUrl}
                alt={feature.name}
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
