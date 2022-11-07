import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, intialStep } = props;
  const stepKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepKeys.indexOf(intialStep > -1 ? intialStep : stepKeys[0])
  );
  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(CurrentStep);

  function prevStep() {
    if (+indexStep > 0) {
      setCurrentStep(stepKeys[indexStep - 1]);
    }
  }

  function nextStep() {
    if (+indexStep < totalStep) {
      setCurrentStep(stepKeys[indexStep + 1]);
    }
  }

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  intialStep: propTypes.string,
};

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
