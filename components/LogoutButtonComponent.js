import { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class LogoutButtonComponent extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {

  }

  render() {
    return (
      <Button onClick={this.logout}></Button>
    );
  }
}