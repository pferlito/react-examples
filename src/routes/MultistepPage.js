import React, {useState, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Step0 from "../components/multistep/Step0";
import StepNav from "../components/multistep/StepNav";


function Steps({step,...props}) {
  const mySteps = [
    Step0
  ];
  const MyTag = mySteps[step];
  return <MyTag {...props} />;
}


function MultistepPage({steps}) {

  const initState = {
    step: 0,
    firstName: "",
    lastName: "",
  };

  const [state, setState] = useState(initState);

  /**
   * Handle text field change.
   * @param e
   */
  function handleChange(e) {
    setState({...state, [e.target.id]: e.target.value});
  }

  /**
   * Handle step navigation.
   * @param dir
   */
  function handleNavigation(dir) {
    setState({...state, step: state.step + dir});
  }

  return (
    <Fragment>
      <Container>
        {state.step === 0 ?
          <Steps step={state.step} handleChange={handleChange}
                 state={state}/> : null}
        <StepNav handleNavigation={handleNavigation}
                 state={state}
                 steps={steps}/>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Container>
    </Fragment>
  );
}

export default MultistepPage;
