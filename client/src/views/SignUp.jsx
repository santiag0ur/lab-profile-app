import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as AuthenticationServices from "./../services/auth-service";

export default class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: "",
      campusOptions: [
        "Madrid",
        "Barcelona",
        "Miami",
        "Paris",
        "Berlin",
        "Amsterdam",
        "México",
        "Sao Paulo",
        "Lisbon"
      ],
      courseOptions: ["WebDev", "UX/UI", "Data Analytics"]
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { username, password, course, campus } = this.state;
    AuthenticationServices.signUpService({
      username,
      password,
      campus,
      course
    })
      .then(user => {
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Campus</Form.Label>
            <Form.Control
              as="select"
              placeholder="Campus"
              name="campus"
              value={this.state.campus}
              onChange={this.onValueChange}
            >
              <option value="" disabled>
                Choose a Campus
              </option>
              {this.state.campusOptions.map(campus => (
                <option key={campus} value={campus}>
                  {campus}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="select"
              placeholder="Course"
              name="course"
              value={this.state.course}
              onChange={this.onValueChange}
            >
              <option value="" disabled>
                Choose a Course
              </option>
              {this.state.courseOptions.map(course => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    );
  }
}
