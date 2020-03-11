import Head from 'next/head';
import LoginComponent from '../components/LoginComponent';
import LogoutButtonComponent from '../components/LogoutButtonComponent';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Login({ loggedIn, ...props }) {
  const view = [
    <Head>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"></link>
    </Head>,
  ];

  const loggedInView = (
    <Container>
      <Row>
        <Col className="text-center">
          Welcome, {props.username}!
        </Col>
      </Row>
      <Row>
        <Col>
          <LogoutButtonComponent></LogoutButtonComponent>
        </Col>
      </Row>
    </Container>
  );

  view.push(loggedIn ? loggedInView : <LoginComponent></LoginComponent>);

  return view;
}

Login.getInitialProps = (context) => {
  return { a: 'b' };
}

export default Login;