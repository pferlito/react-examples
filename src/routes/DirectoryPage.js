import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import {filterUsers, DirectoryView} from "../components/directory/DirectoryView";

function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

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
      let response = await fetch('https://randomuser.me/api/?seed=pferlito&results=15&inc=name,login,email,picture');
      //let response = await fetch('https://randomuser.me/api/?results=50');
      let data = await response.json();
      data = data.results;
      setUsers(data);
    }

    getData();
  }, []);

  const usersPerPage = 5;
  let filteredUsers = filterUsers(users, search);
  let paginatedUsers = paginate (filteredUsers, usersPerPage, currentPage);

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
          <DirectoryView users={paginatedUsers}/>
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