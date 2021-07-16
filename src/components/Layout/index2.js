import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Layout
 **/

//NEW ADDED START
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";

import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";

import NavItem from "./NavItem";
import MyDash from ".";
import defaultAdmin from "./bablu.jpg"

const user = {
  avatar: "defaultAdmin",
  jobTitle: "Pronto Admin",
  name: "Bablu Kumar",
};

const items = [
  {
    href: "/",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/page",
    icon: UsersIcon,
    title: "Pages",
  },
  {
    href: "/category",
    icon: UsersIcon,
    title: "Categories",
  },
  {
    href: "/products",
    icon: ShoppingBagIcon,
    title: "Products",
  },
  {
    href: "/app/customers",
    icon: UsersIcon,
    title: "Customers",
  },
  {
    href: "/orders",
    icon: UserIcon,
    title: "Orders",
  },
  {
    href: "/",
    icon: SettingsIcon,
    title: "Settings",
  },
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];

//NEW ADDED END

const Layout = () => {
  return (
    <>
      <MyDash />
      {/* {props.sidebar ? (
        <Container fluid className="mt-5">
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink exact to={`/`}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/page`}>Page</NavLink>
                </li>
                <li>
                  <NavLink to={`/category`}>Category</NavLink>
                </li>
                <li>
                  <NavLink to={`/products`}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={`/orders`}>Orders</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "60px" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Avatar
            component={RouterLink}
            src={defaultAdmin}
            sx={{
              cursor: "pointer",
              width: 80,
              height: 80,
            }}
            to="/account"
          />
          <Typography color="textPrimary" variant="h5">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.jobTitle}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <List>
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </List>
        </Box>
        {/* <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            backgroundColor: "background.default",
            m: 2,
            p: 2,
          }}
        ></Box> */}
      </Box>
    </>
  );
};

export default Layout;
