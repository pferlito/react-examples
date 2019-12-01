import React, {useState, useRef, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Steps from "../components/multistep/Steps";
import StepNav from "../components/multistep/StepNav";


function MultistepPage({steps}) {

  const initState = {
    step: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: {}
  };

  const form = useRef(null);

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
    let valid = form.current.reportValidity();
    valid && setState({...state, step: state.step + dir});
  }

  /**
   * Handle form submission.
   * @param e
   */
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Fragment>
      <Container>
        <form onSubmit={handleSubmit} ref={form}>
            <Steps step={state.step} handleChange={handleChange}
                   state={state}/>
          <StepNav handleNavigation={handleNavigation}
                   state={state}
                   steps={steps}/>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </form>
      </Container>
    </Fragment>
  );
}

export default MultistepPage;
