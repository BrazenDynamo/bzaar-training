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
    }

    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
  }

  login() {
    fetch()
  }

  handleUsernameInputChange(e) {
    this.setState({usernameInput: e.target.value});
  }

  handlePasswordInputChange(e) {
    this.setState({passwordInput: e.target.value});
  }

  render() {
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
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}