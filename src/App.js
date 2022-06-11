import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from './components/search';
import City from './pages/city';

const App = () => {

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navy" aria-controls="navy" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navy">
            <a className="navbar-brand text-danger" href="/some-reactive-weather/#/"><em><span className="text-success">R</span>eactive <span className="text-success">W</span>eather</em></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/city/bucharest,ro"}>Bucharest</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/city/budapest,hu"}>Budapest</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/city/warsaw,pl"}>Warsaw</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Search />
            </form>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/city/:city,:country" component={City} />
      </Switch>
    </Router>
  );
}

export default App;
