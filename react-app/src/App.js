import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import AdvisorLoginForm from "./components/auth/AdvisorLoginForm";
import ShowPreferences from "./components/ShowPreferences";
import UpdatePreferencesForm from "./components/UpdatePreferencesForm";
import UpdateSubscriptionForm from "./components/UpdateSubscriptionForm"
import ShowSubscription from"./components/ShowSubscription";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import CreatePreferences from "./components/CreatePreferences";
import CreateSubscription from "./components/CreateSubscription";
import CreateOrder from "./components/CreateOrder";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import ShowOrders from "./components/ShowOrders";
import ShowProducts from "./components/ShowProducts";
import Home from "./components/Home";

function App() {
  // const reader = useSelector(state => state.session.reader)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <ProtectedRoute path="/my-readers" exact={true}>
          <ShowOrders />
        </ProtectedRoute>
        <ProtectedRoute path="/orders/new" exact={true}>
          <CreateOrder />
        </ProtectedRoute>
        <ProtectedRoute path="/products" exact={true}>
          <ShowProducts />
        </ProtectedRoute>
        <Route path="/advisor-login" exact={true}>
          <AdvisorLoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/reader-quiz" exact={true} >
          <CreatePreferences />
        </Route>
        <ProtectedRoute path="/readers/:reader_id/subscription/new" exact={true} >
          <CreateSubscription />
        </ProtectedRoute>
        <ProtectedRoute path="/readers/:reader_id/subscription/update" exact={true} >
          <UpdateSubscriptionForm />
        </ProtectedRoute>
        <ProtectedRoute path="/readers/:reader_id/subscription" exact={true} >
          <ShowSubscription />
        </ProtectedRoute>
        <ProtectedRoute path="/readers/:reader_id/preferences/update" exact={true} >
          <UpdatePreferencesForm />
        </ProtectedRoute>
        <ProtectedRoute path="/readers/:reader_id/preferences" exact={true} >
          <ShowPreferences />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
