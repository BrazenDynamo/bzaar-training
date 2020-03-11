import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
      showModal: true,
      error: false,
    }

    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.login = this.login.bind(this);
    this.setShowModal = this.setShowModal.bind(this);
  }

  login() {
    this.setShowError(false);

    const fetchData = {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.usernameInput,
        password: this.state.passwordInput,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch('/api/users/login', fetchData)
      .then(res => {
        if (res.status !== 200) {
          this.setShowError(true);
          return;
        }
        console.log(res);
        this.props.onLogin();
      });
  }

  setShowError(show) {
    // this.state.error = show;
    this.setState({...this.state, error: show});
  }

  setShowModal(show) {
    // this.state.showModal = show;
    this.setState({...this.state, showModal: show});
  }

  handleUsernameInputChange(e) {
    this.setState({usernameInput: e.target.value});
  }

  handlePasswordInputChange(e) {
    this.setState({passwordInput: e.target.value});
  }

  render() {
    const errorUi = (
      <Row>
        <Col>
          <p className="text-danger">Login failed.</p>
        </Col>
      </Row>
    );

    return (
      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        value={this.state.usernameInput}
                        onChange={this.handleUsernameInputChange}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={this.state.passwordInput}
                        onChange={this.handlePasswordInputChange}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <Button onClick={this.login}>Login</Button>
                    </Col>
                  </Row>
                  { this.state.error ? errorUi : <></>}
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}