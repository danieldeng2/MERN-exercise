import React, { Component } from "react";
import { Link } from "react-router-dom";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>Edit</Link>&nbsp;&nbsp;
      <button
        className="btn-link btn-anchor"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/exercises/")
      .then((response) => response.json())
      .then((data) => this.setState({ exercises: data }))
      .catch((err) => console.log(err));
  }

  deleteExercise(id) {
    fetch(`http://localhost:5000/api/exercises/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div className="col">
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map((current) => {
              return (
                <Exercise
                  exercise={current}
                  deleteExercise={(id) => this.deleteExercise(id)}
                  key={current._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
