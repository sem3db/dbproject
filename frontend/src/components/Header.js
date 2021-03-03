import React from "react";
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../action/userActions'
import { signout } from "../action/adminActions";
import SearchBox from './SearchBox'

const Header = (props) => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state =>state.userLogin);
  const {userInfo} =userLogin;
  const adminSignin = useSelector(state =>state.adminSignin);
  const {adminInfo} =adminSignin;

  const logoutHandler = ()=>{
    console.log('jjjjjjjjjjjjjjjjjjjjj')
    dispatch(logout())
  }

  const signoutHandler = ()=>{
    dispatch(signout())
    props.history.push(`/`);
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
            {/* <Nav className=".d-none">
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
            </Nav> */}
            <Route render={({history})=><SearchBox history={history}/>}/>

            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.first_name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Log Out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

              {adminInfo ? (
                <NavDropdown title="Admin" id="admin-dropdown">
                  <LinkContainer to="/orderlist">
                    <NavDropdown.Item>Order List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/productlist">
                    <NavDropdown.Item>Product List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/reports">
                    <NavDropdown.Item>Reports</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="#signout" onClick={signoutHandler}>
                    <NavDropdown.Item>Sign Out</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                ) : (
                  <NavDropdown title="Admin" id="admin-dropdown">
                  <LinkContainer to="/signin">
                    <NavDropdown.Item>Sign In</NavDropdown.Item>
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
