import React from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";

/**
 * Maps step number to step component.
 * @param step
 * @param props
 */
export default function Steps({step, ...props}) {
  console.log('rendering step ' + step);
  const mySteps = [
    Step0,
    Step1
  ];
  const MyTag = mySteps[step];
  return <MyTag {...props} />;
}
