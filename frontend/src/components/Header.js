import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../action/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state =>state.userLogin)
  const {userInfo} =userLogin
  const logoutHandler = ()=>{
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Shop - C</Navbar.Brand>
          </LinkContainer>


          {/* <Nav >
          <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/a">Product1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/a">Product2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/">Product3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/c">Product4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/d">Product5</Nav.Link>
            </Nav.Item>
          </Nav> */}



          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className=".d-none">
          <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/a">Product1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/a">Product2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/">Product3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/c">Product4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btn btn-secondary" href="/d">Product5</Nav.Link>
            </Nav.Item>
          </Nav>


            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onclick={logoutHandler}></NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
