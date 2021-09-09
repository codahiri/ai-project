import React from "react";
import { Brand, Button, Container, Nav, Navbars } from "../styles/styles";
import Logo from "../../images/logo/logo.png";

export const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Navbars>
          <Brand>
            <img src={Logo} alt="Logo" />
            <span>Artificial Intelligence</span>
          </Brand>
          <ul className="nav-items">
            <li className='f-child'>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <Button>Sign In</Button>
        </Navbars>
      </Container>
    </Nav>
  );
};
