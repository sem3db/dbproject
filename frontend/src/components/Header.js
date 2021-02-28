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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=".d-none">
              <LinkContainer to="/products/camera">
                <Nav.Link className="btn btn-secondary">Camera</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/phone">
                <Nav.Link className="btn btn-secondary">Phone</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/laptop">
                <Nav.Link className="btn btn-secondary">Laptop</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products/watch">
                <Nav.Link className="btn btn-secondary">Watch</Nav.Link>
              </LinkContainer>
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

              {/* to do - admin only */}
              {/* {userInfo && userInfo.isAdmin && ( */}
              {"admin" && (
                <NavDropdown title="Admin" id="admin-dropdown">
                  <LinkContainer to="/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/productlist">
                    <NavDropdown.Item>Product List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderlist">
                    <NavDropdown.Item>Order List</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
