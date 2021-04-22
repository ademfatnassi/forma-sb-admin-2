import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Page404 from "./Pages/Page404/Page404";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import UserManagement from "./Pages/UserManagement/UserManagement";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/users">
          <UserManagement />
        </Route>
        <Route component={Page404} path="*" />
      </Switch>
    </Router>
  );
};

export default App;
