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
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";

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
        <Route path="/advisor-login" exact={true}>
          <AdvisorLoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/reader-quiz" exact={true} >
          <CreatePreferences />
        </ProtectedRoute>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
