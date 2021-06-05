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
import AdminPage from './components/pages/admin/Admin'
import Footer from './components/util/footer/Footer'
import "./App.css";

function App() {
  return (
    <Router>
        <NavBar/>
        <main className="main-cotainer">
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
            <Route path="/admin" exact>
              <AdminPage/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
