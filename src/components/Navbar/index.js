import React from 'react';

import styled from 'styled-components';
//icon
import { LogoIcon, ShopIcon } from '../../assets/icons';

//components
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const index = () => {
  return (
    <NavigationBar>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={LogoIcon} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Row className="w-100">
            <Col xs={8} className="d-flex justify-content-center align-items-center">
              <Nav>
                <Nav.Link>Breakfast</Nav.Link>
                <Nav.Link>Lunch</Nav.Link>
                <Nav.Link>Dinner</Nav.Link>
              </Nav>
            </Col>
            <Col xs={4} className="d-flex justify-content-end align-items-center">
              <img src={ShopIcon} alt="shopIcon" height="21px" />
            </Col>
          </Row>
        </Navbar.Collapse>
      </Navbar>
    </NavigationBar>
  );
};

export default index;

const NavigationBar = styled.nav`
  padding: 50px 100px;
`;
