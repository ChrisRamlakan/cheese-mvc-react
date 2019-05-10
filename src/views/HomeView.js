import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class HomeView extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center">Cheese-React-Spa</h2>
        <p className ="text-center">This application is a ReactJS implementation of Cheese-MVC.</p>
        <p className ="text-center">It allows the creation of cheese, category, and menu objects</p>
      </Container>
    );
  }
}

export default HomeView;
