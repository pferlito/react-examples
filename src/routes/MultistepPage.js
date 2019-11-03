import React, {useState, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Step0 from "../components/multistep/Step0";
import StepNav from "../components/multistep/StepNav";

function MultistepPage({steps}) {

  const initState = {
    step: 0,
    firstName: "",
    lastName: "",
  };

  const [state,setState] = useState(initState);

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
          <Step0 handleChange={handleChange}
                  state={state}/> : null}
          <StepNav handleNavigation={handleNavigation}
                   state={state}
                   steps={steps}/>
        {JSON.stringify(state,2)}
      </Container>
    </Fragment>
  );
}

export default MultistepPage;
