import { Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import New from "./pages/New";
import Resume from "./pages/Resume";
import history from "./history";
//material ui
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/new" />
            </Route>
            <Route path="/new" component={New}></Route>
            <Route path="/resume/:userId" component={Resume}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
