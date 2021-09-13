import React from 'react';
import '../styles/Admin.css';

class Admin extends React.Component {
  state = { isLoggedIn: false, input: '' };

  buttonClicked = () => {
    console.log(this.state.input);
    if (this.state.input === 'goat-cheese') {
      this.setState({ isLoggedIn: true });
    }
    else {
      this.setState({ input: '' });

    }
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.buttonClicked();
    }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="admin-container">
          <div className="password-box">
            <h4>Admin</h4>
            <input
              placeholder="Password"
              value={this.state.input}
              type="password"
              onChange={(e) => this.setState({ input: e.target.value })}
              onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.buttonClicked}>Submit</button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          Welcome
        </div>
      );
    }
  }
}

export default Admin;