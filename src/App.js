import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom"
import Iframe from "./components/Iframe"
function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/main">
      <Intro/>
      <Projects/>
      </Route>
      <Route exact path="/resume">
      <Iframe></Iframe>
      </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
