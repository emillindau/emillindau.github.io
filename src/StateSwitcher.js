import React, { useState } from "react";

const ComponentA = () => (
  <div style={{ backgroundColor: "#BADA55" }}>ComponentA</div>
);
const ComponentB = () => (
  <div style={{ backgroundColor: "#BBDADD" }}>ComponentB</div>
);
const ComponentC = () => (
  <div style={{ backgroundColor: "#BFDACC" }}>ComponentC</div>
);

const STATES = {
  A: 0,
  B: 1,
  C: 3,
  END: -1
};

function* getComponent(state) {
  if (state === STATES.A) {
    yield ComponentA;
  }
  yield ComponentB;
  return ComponentC;
}

const StateSwitcher = props => {
  const currentState = useState(STATES.A);
  const generatorComponent = getComponent();
  generatorComponent.next();
  return <div></div>;
};

export default StateSwitcher;
