import NavBar from "./components/util/Navbar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import OrderPage from './components/pages/order/OrderPage'
import AboutPage from './components/pages/about/AboutPage'
import "./App.css";

function App() {
  return (
    <Router>
        <NavBar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/order" exact>
              <OrderPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
