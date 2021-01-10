import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'; 
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Book from './components/pages/Book';
import Research from './components/pages/Research';
import Patreon from './components/pages/Patreon';
import Videos from './components/pages/Videos';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/research' component={Research} />
          <Route path='/videos' component={Videos} />
          <Route path='/book' component={Book} />
          <Route path='/blog' component={Blog} />
          <Route path='/patreon' component={Patreon} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;