import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Navigation extends React.Component {

  render() {
    return (


      <div className="navigation">
        <Navbar className="navigation-style" color="faded" light >
          <Nav className="float-right">
            <NavbarBrand href="/">Truescore</NavbarBrand>
            <NavItem>
              <NavLink href="#/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/game">Play</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/stats">Stats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
