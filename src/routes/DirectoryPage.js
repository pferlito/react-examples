import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import {filterUsers, DirectoryView} from "../components/directory/DirectoryView";

/**
 * Display a directory search page.
 */
function DirectoryPage() {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");
  let [currentPage, setCurrentPage] = useState (1);

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  
  function handlePageChange(e) {
    let newPage = parseInt(e.target.getAttribute('page'));
    console.log(newPage);
    setCurrentPage(newPage);
  }

  useEffect(() => {
    async function getData() {
      let response = await fetch('https://randomuser.me/api/?seed=pferlito&results=5&inc=name,login,email,picture');
      //let response = await fetch('https://randomuser.me/api/?results=50');
      let data = await response.json();
      data = data.results;
      setUsers(data);
    }

    getData();
  }, []);

  let filteredUsers = filterUsers(users, search);

  return (
    <Container>
      <Row>
        <Col md={{span: 8}}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control onChange={handleSearch} type="text"
                            placeholder="Search"/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 8}}>
          <DirectoryView users={filteredUsers}/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{span: 3}}>
          <Pagination>
            <Pagination.Item page={1} onClick={handlePageChange} key={1} active={currentPage === 1}>1</Pagination.Item>
            <Pagination.Item page={2} onClick={handlePageChange} key={2} active={currentPage === 2}>2</Pagination.Item>
            <Pagination.Item page={3} onClick={handlePageChange} key={3} active={currentPage === 3}>3</Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default DirectoryPage;