import React, {useState, useEffect} from 'react';
import cloneDeep from "lodash.clonedeep";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import EditModal from "../components/directory/EditModal";
import EditModalContextProvider
  from "../components/directory/EditModalContextProvider";
import {
  filterUsers,
  DirectoryView
} from "../components/directory/DirectoryView";

/**
 * Paginate an array
 * @param array
 * @param page_size
 * @param page_number
 * @returns {array}
 */
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
  const [loading, setLoading] = useState(true);

  /**
   * Find a user by user name.
   * @param userName
   */
  function findUser(userName) {
    return users.findIndex((acct,index) => {
      return acct.login.username === userName;
    });
  }

  function handleDelete(e) {
    const userName = userToEdit.login.username;
    const index = findUser(userName);
    const usersCopy = [...users];
    usersCopy.splice(index,1);
    setUsers(usersCopy);
  }

  /**
   * Save an edited user.
   * @param e event object
   */
  function handleSave(e) {
    const userName = userToEdit.login.username;
    const usersCopy = [...users];
    let userIndex = usersCopy.findIndex((acct,index) => {
      return acct.login.username === userName;
    });
    usersCopy[userIndex] = userToEdit;
    setUsers(usersCopy);
  }

  /**
   * Handle click on Edit button in directory table.
   * @param e event object
   */
  function handleUserEdit(e) {
    const userName = e.target.parentElement.id;
    const index = findUser(userName);
    const user = users[index];
    setShowModal(true);
    // make a copy of the user object for editing
    const userCopy = cloneDeep(user);
    setUserToEdit(userCopy);
  }

  /**
   * Handle keyword search.
   * @param e event object
   */
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  /**
   * Handle pagination click.
   * @param e event object
   */
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
      setLoading(false);
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
            <Form.Group controlId="keywordSearch">
              <Form.Control onChange={handleSearch} type="text"
                            placeholder="Search"/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 8}}>
          {loading && <div className="loader" />}
          {!loading && <DirectoryView users={paginatedUsers}
                         handleUserEdit={handleUserEdit}/>}
          <EditModalContextProvider showModal={showModal}
                                    setShowModal={setShowModal}
                                    userToEdit={userToEdit}
                                    setUserToEdit={setUserToEdit}>
            {userToEdit &&
            <EditModal handleSave={handleSave} handleDelete={handleDelete}/>}
          </EditModalContextProvider>
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