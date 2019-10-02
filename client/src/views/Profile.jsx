import React, { Component } from "react";

// import { loggedIn as loggedInService } from './services/auth-service';
import * as AuthServices from "./../services/auth-service";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onFileChange = this.onFileChange.bind(this);
  }

  componentDidMount() {
    AuthServices.loggedIn()
      .then(user => {
        this.setState({
          user
        });
        // console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onFileChange(event) {
    const data = new window.FormData();
    data.append("image", event.target.files[0]);
    AuthServices.uploadService(data)
      .then(user => {
        console.log(user);
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const user = this.state.user;
    return (
      (!user && (
        <div>
          <h1>Loading profile...</h1>
        </div>
      )) || (
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <Image
                src={this.state.user.image}
                alt={this.state.user.username}
                style={{ maxWidth: "100%" }}
              />
              <Form.Group>
                <label for="profile-photo" className="file-input">
                  <span>Profile Photo</span>
                </label>
                <Form.Control
                  id="profile-photo"
                  type="file"
                  name="image"
                  onChange={this.onFileChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      )
    );
  }
}
