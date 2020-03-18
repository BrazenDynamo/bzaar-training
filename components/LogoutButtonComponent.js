import { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class LogoutButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fetch('/api/users/logout', { method: 'POST' })
      .then(res => {
        if (res.status !== 200) {
          throw new Error();
        }
        this.props.onLogout();
      })
      .catch(e => {
        this.props.onLogoutFail();
      });
  }

  render() {
    return (
      <Button onClick={this.logout}>Logout</Button>
    );
  }
}