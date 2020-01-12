import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import EditModal from "../components/directory/EditModal";

import {
  filterUsers,
  DirectoryView
} from "../components/directory/DirectoryView";

function paginate(array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

/**
 * Display a directory search page.
 */
function DirectoryPage() {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  const [userToEdit, setUserToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  /**
   * Handle click on Edit button in directory table.
   * @param e
   */
  function handleUserEdit(e) {
    const uid = e.target.parentElement.id;
    const user = users.find((acct) => {
      return acct.login.username === uid;
    });
    setShowModal(true);
    setUserToEdit(user);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handlePageChange(e) {
    let newPage = parseInt(e.target.getAttribute('page'));
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
  let paginatedUsers = paginate(filteredUsers, usersPerPage, currentPage);
  let pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  let items = [];
  for (let i = 1; i <= pageCount; i++) {
    items.push(<Pagination.Item page={i} onClick={handlePageChange} key={i}
                                active={currentPage === i}>{i}</Pagination.Item>)
  }
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
          <DirectoryView users={paginatedUsers} handleUserEdit={handleUserEdit}/>
          {showModal && <EditModal user={userToEdit} setShowModal={setShowModal}/>}
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{span: 3}}>
          <Pagination>
            {items}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default DirectoryPage;