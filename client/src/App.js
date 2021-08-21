import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import New from "./pages/New";
//material ui
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/new" />
            </Route>
            <Route path="/new" component={New}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
