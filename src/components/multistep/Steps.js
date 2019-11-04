import React from "react";
import Step0 from "./Step0";

export default function Steps({step, ...props}) {
  const mySteps = [
    Step0
  ];
  const MyTag = mySteps[step];
  return <MyTag {...props} />;
}
