import { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class LogoutButtonComponent extends Component {
  render() {
    return (
      <Button onClick={this.props.onLogout}>Logout</Button>
    );
  }
}