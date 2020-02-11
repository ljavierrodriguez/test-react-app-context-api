import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import injectContext from './store/appContext';
import { Context } from './store/appContext';

const Home = props => <h1>Home</h1>;
const Services = props => <h1>Services</h1>;
const About = props => <h1>About</h1>;
const Contact = props => {
  const { store, actions } = useContext(Context);
  console.log(props);
  return (
    <>
      <h1>Contact {store.name}</h1>
      <button onClick={() => actions.getLogin()}>Login</button>
    </>
  )
};


const Navbar = props => {
  return (
    <nav className="nav nav-tabs">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  )
}

function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/contact" render={() => <Contact {...props} />} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);
