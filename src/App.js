import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <Bio/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
