import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { menuType } from "../../utilities/prop-types";
import { Link } from "react-router-dom";

const createMenuRow = menu => (
  <tr key={menu.id}>
    <td>
      <Link to={`/menus/${menu.id}`}>{menu.name}</Link>
    </td>
  </tr>
);

const MenusList = props => {
  const { menus } = props;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center">Menus</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          <Table size="sm" bordered>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>

            <tbody>{menus.map(createMenuRow)}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

MenusList.propTypes = {
  menus: PropTypes.arrayOf(menuType).isRequired,
};

export default MenusList;
