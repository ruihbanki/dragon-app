import { Route, Switch } from "react-router";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/main">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
