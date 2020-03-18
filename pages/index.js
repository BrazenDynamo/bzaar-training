import Head from 'next/head';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import LoginComponent from '../components/LoginComponent';
import LogoutButtonComponent from '../components/LogoutButtonComponent';

function Page(props) {
  const [showLoggedIn, setLoggedIn] = useState(props.loggedIn);
  const [username, setUsername] = useState(props.username || '');
  const [showModal, setShowModal] = useState(false);

  function loginSuccessHandler(userstate) {
    setShowModal(true);
    setUsername(userstate.username);
  }

  const loggedInView = (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col className="text-center">
          Welcome, {username}!
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <LogoutButtonComponent onLogout={() => setLoggedIn(false)}></LogoutButtonComponent>
        </Col>
      </Row>
    </Container>
  );

  function closeModal() {
    setShowModal(false);
    setLoggedIn(true);
  }

  return (
    <>
    <Head>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"></link>
    </Head>
    { showLoggedIn ? loggedInView : <LoginComponent onLogin={loginSuccessHandler}></LoginComponent> }
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Body>
        Login success!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

Page.getInitialProps = async function(context) {
  const fetch = require('node-fetch');

  const response = await fetch('http://localhost:8080/api/users/verify-login', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${context.req.cookies['bzaartraining_id_token']}`,
    },
  });

  if (response.status !== 200) {
    return {};
  }

  const resBody = await response.json();

  return { username: resBody.username, loggedIn: true };
};

export default Page;