import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import request from "../utilities/api-request";
import CategoriesList from "../components/category/CategoriesList";
import CategoryForm from "../components/category/CategoryForm";

class CategoriesView extends Component {
  state = {
    // Initial State = Empty categories array
    categories: [],
  };

  async componentDidMount() {
    // request doesnt exist yet but we expect it to behave this way
    // meaning execute an HTTP GET request at api-domain/categories
    const res = await request.get("/categories");
    const categories = res.data; // the response data is the category collection list

    // Update state with the categories from the API
    // state.categories = categories;
    this.setState({ categories });
  }

  addToCategories = category =>
    this.setState(state => {
      const { categories } = state;
      // Return a new state with the category added to categories list
      return { categories: [category, ...categories] };
    });

  render() {
    const { categories } = this.state;

    return (
      <Container>
        <Row>
          <CategoryForm addCategory={this.addToCategories} />
        </Row>
        <br />
        <Row>
          <CategoriesList categories={categories} />
        </Row>
      </Container>
    );
  }
}

export default CategoriesView;
