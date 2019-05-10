import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import request from "../../utilities/api-request";

class MenuForm extends Component {
  state = {
    name: "",
    disabled: true,
  };

  handleInputChange = event => {
    // the value attribute of the input that was changed
    const { value } = event.target;
    // true or false based on whether the value is invalid

    // Category length between 3 and 15 chars
    const disabled = value.length < 3 || value.length > 15;
    console.log(value, disabled);
    // Update State
    this.setState({ disabled, name: value });
  };

  // sets the value to an empty string to reset the form
  resetForm = () => this.setState({ name: "" });

  handleSubmit = async event => {
    event.preventDefault();
    const { name } = this.state;
    const { addMenu } = this.props;

    // Send a POST request with the form data (don't forget to await the Promise!)
    const res = await request.post("/menus", { name });
    const menu = res.data;

    // Send the new category back to the <CategoriesView> Parent
    addMenu(menu);
    this.resetForm();
  };

  render() {
    const { disabled, name } = this.state;

    return (
      <Container className="text-center">
        <h2>Create a Menu</h2>
        <Form>
          <Form.Group as={Col} sm={{ offset: 4, span: 4 }}>
            <Form.Label>Menu Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              minLength={3}
              maxLength={15}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            disabled={disabled}
            onClick={this.handleSubmit}
          >
            Create
          </Button>
        </Form>
        <hr />
      </Container>
    );
  }
}

MenuForm.propTypes = {
  // TODO: implement the prop types for this component (see below)
  addMenu: PropTypes.func.isRequired,
};

export default MenuForm;
