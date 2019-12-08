import React, {useState,useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DirectoryView from "../components/directory/DirectoryView";

function DirectoryPage() {
  let [users,setUsers] = useState([]);

  function handleChange() {
    console.log('in handleChange');
  }

  useEffect( ()=>{
    async function getData() {
      let response = await fetch('https://randomuser.me/api/?results=50&inc=name,login,email,picture');
      //let response = await fetch('https://randomuser.me/api/?results=50');
      let data = await response.json();
      data = data.results;
      setUsers(data);
    }
    getData();
  },[]);

  return (
    <Container>
      <Row>
        <Col md={{span: 8}}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control onChange={handleChange} type="text" placeholder="Search" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 8}}>
          <DirectoryView users={users}/>
        </Col>
      </Row>
    </Container>
  );
}

export default DirectoryPage;