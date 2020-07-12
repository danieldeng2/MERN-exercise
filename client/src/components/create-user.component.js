import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    fetch("http://localhost:5000/api/users/", {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => console.log(data));

    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div className="col">
        <h3>Create New User</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
