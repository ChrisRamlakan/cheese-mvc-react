import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// TODO: if you have not created the cheese and menu types yet
import { cheeseType } from "../../utilities/prop-types";

const createCheeseRow = (cheese, removeCheese) => (
  <tr key={cheese.id}>
    {// TODO: conditionally render the remove button in the ( ) below
    removeCheese && (
      <td style={{ width: "32px", border: "none" }}>
        <Button
          size="sm"
          variant="outline-danger"
          onClick={
            () => removeCheese(cheese.id)
            /* TODO: give removeCheese the cheese ID */
          }
        >
          remove
        </Button>
      </td>
    )}
    <td>{cheese.name}</td>
    <td>{cheese.category.name}</td>
    <td>{cheese.description}</td>
    {/* TODO: implement the columns for the cheese name, description, and cheese.category.name */}
  </tr>
);

const CheesesList = props => {
  const { cheeses, removeCheese } = props;

  return (
    <Container>
      <h3 className="text-center">Cheeses</h3>
      <Table responsive striped bordered size="lg">
        <thead>
          <tr>
            {/* only render blank column if [remove] button should render */}
            {removeCheese && <th style={{ border: "none" }} />}
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/*
            TODO: create the cheese rows
            be careful here, your callback createCheeseRow needs 2 arguments
              the cheese element and the removeCheese prop
          */
          cheeses.map(cheese => createCheeseRow(cheese, removeCheese))}
        </tbody>
      </Table>
    </Container>
  );
};

CheesesList.propTypes = {
  // TODO: implement the prop types
  // removeCheese can be one of two types (boolean or function)
  // play the dot game on PropTypes to see how to implement this
  cheeses: PropTypes.arrayOf(cheeseType).isRequired,
  removeCheese: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default CheesesList;
