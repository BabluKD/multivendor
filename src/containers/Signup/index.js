import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import { useEffect } from "react";
import logo from "../../logo1.png";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (user.loading) {
    return <p>Loading...!</p>;
  }

  return (
    <>
      <Layout>
        {/* <Container>
          {user.message}
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userSignup}>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      value={firstName}
                      name="firstName"
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value={lastName}
                      name="lastName"
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>

                <Input
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
                />
                <Button
                  variant="primary"
                  type="submit"
                  name="adminSignupSubmit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container> */}

        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            marginTop: "45px",
          }}
        >
          <div className="wrapper fadeInDown">
            <div id="formContent">
              {/* Tabs Titles */}
              {/* Icon */}
              <div className="fadeIn first">
                <img
                  className="login-img"
                  src={logo}
                  id="icon"
                  alt="User Icon"
                />
              </div>
              {/* Login Form */}
              <form onSubmit="{userLogin}">
                <input
                  className="fadeIn second"
                  type="text"
                  id="login"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="fadeIn second"
                  type="text"
                  id="login"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  className="fadeIn second"
                  type="text"
                  id="login"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  id="password"
                  className="fadeIn third"
                  name="login"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  id="password"
                  className="fadeIn third"
                  name="login"
                  placeholder="Confirm Password"
                  value={cpassword}
                  onChange={(e) => setcPassword(e.target.value)}
                />
                <input
                  type="submit"
                  className="fadeIn fourth"
                  defaultValue="Log In"
                />
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Signup;
