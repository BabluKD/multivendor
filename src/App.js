import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
// import Signup from './containers/Signup';
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";
import NewPage from "./containers/NewPage";
import Layout from "./components/Layout";


function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <BrowserRouter>
      <Route path="/signin" component={Signin} />
      <Switch>
        <Layout>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/page" component={NewPage} />
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />
        </Layout>
      </Switch>
    </BrowserRouter>
    // <div className="App">

    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/page" component={NewPage} />
    //     <Route path="/category" component={Category} />
    //     <Route path="/products" component={Products} />
    //     <Route path="/orders" component={Orders} />

    //     <Route path="/signin" component={Signin} />
    //     {/* <Route path="/signup" component={Signup} /> */}
    //   </Switch>
    // </div>
  );
}

export default App;
