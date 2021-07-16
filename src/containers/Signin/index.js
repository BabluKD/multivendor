import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  // createStyles,
  makeStyles,
  // withStyles,
  // Theme,
} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  console.log(email, password, "hi");
  const userLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
      <Container className="mt-5 pt-5">
        <Typography variant="h4" align="center">
          {/* <Image src="../../img/logo1.png" alt="logo" /> */}
          <br />
          Admin Sign in
        </Typography>
        {/* <Row style={{ marginTop: "25vh" }}> */}
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userLogin}>
            <FormControl fullWidth={true}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                type="email"
                label="Enter Email"
                name="admin-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                label="Enter Password"
                name="admin-password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            {/* <Input 
                                label="Email"
                                placeholder="Email"
                                value={email}
                                name="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input 
                                label="Password"
                                placeholder="Password"
                                value={password}
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            /> */}
            <FormControl fullWidth={true}>
              <Button variant="primary" type="submit" name="adminLoginSubmit">
                Submit
              </Button>
            </FormControl>
          </Form>
        </Col>
        {/* </Row> */}
      </Container>
  );
};

export default Signin;
