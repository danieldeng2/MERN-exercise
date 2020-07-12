import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/users/")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          this.setState({
            users: data.map((user) => user.username),
            username: data[0].username,
          });
        }
      })
      .catch((error) => console.log(error));

  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    fetch("http://localhost:5000/api/exercises/", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(exercise),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    window.location = "/";
  }

  render() {
    return (
      <div className="col">
        <h3>Create New Exercise Log</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label>Username: </label>
            <select
              // ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={(e) => this.setState({ duration: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState({ date: date })}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
