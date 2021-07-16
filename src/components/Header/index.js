import React from "react";
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import Logo from '../Layout/bablu.jpg';

const Header = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Avatar src={Logo} alt="" />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default Header;






// import React from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { NavLink, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { signout } from "../../actions";

// /**
//  * @author
//  * @function Header
//  **/

// const Header = (props) => {
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const logout = () => {
//     dispatch(signout());
//   };

//   const renderLoggedInLinks = () => {
//     return (
//       <Nav>
//         <li className="nav-item">
//           <span className="nav-link" onClick={logout}>
//             Signout
//           </span>
//         </li>
//       </Nav>
//     );
//   };

//   const renderNonLoggedInLinks = () => {
//     return (
//       <Nav>
//         {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
//         <li className="nav-item">
//           <NavLink to="signin" className="nav-link">
//             Signin
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="signup" className="nav-link">
//             Signup
//           </NavLink>
//         </li>
//       </Nav>
//     );
//   };

//   return (
//     <Navbar
//       collapseOnSelect
//       fixed="top"
//       expand="lg"
//       bg="dark"
//       variant="dark"
//       style={{ zIndex: 1 }}
//     >
//       <Container fluid>
//         {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
//         <Link to="/" className="navbar-brand">
//           Admin Dashboard
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                             </NavDropdown> */}
//           </Nav>
//           {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
