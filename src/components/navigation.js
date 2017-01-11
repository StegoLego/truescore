import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar id="nav"color="faded" light >
          <Nav className="float-right">
            <NavbarBrand href="/">Truescore</NavbarBrand>
            <NavItem>
            </NavItem>
              <NavLink href="#/home">Home</NavLink>
            <NavItem>
              <NavLink href="#/game">Play</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/stats">Stats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/topFive">Leaders</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
