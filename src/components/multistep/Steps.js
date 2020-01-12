import React from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";

/**
 * Maps step number to step component.
 * @param step
 * @param props
 */
export default function Steps({step, ...props}) {
  const mySteps = [
    Step0,
    Step1,
    Step2
  ];
  const MyTag = mySteps[step];
  return <MyTag {...props} />;
}
