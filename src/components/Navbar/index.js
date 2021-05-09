import React from 'react';

import styled from 'styled-components';
//icon
import { LogoIcon, ShopIcon } from '../../assets/icons';

//components
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

const index = () => {
  return (
    <NavigationBar>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={LogoIcon} alt="logo" width="84px" height="27px" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Row className="w-100">
            <Col xs={10} className="d-flex justify-content-center align-items-center">
              <Nav>
                <NavLink className="navlinks-styles">Breakfast</NavLink>
                <NavLink className="navlinks-styles">Lunch</NavLink>
                <NavLink className="navlinks-styles">Dinner</NavLink>
              </Nav>
            </Col>
            <Col xs={2} className="d-flex justify-content-end align-items-center">
              <Button variant="link">
                <img src={ShopIcon} alt="shopIcon" height="21px" />
              </Button>
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

const NavLink = styled(Nav.Link)`
  padding-right: 30px !important;
  padding-left: 30px !important;
  font-family: Poppins !important;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #333333 !important;
`;
