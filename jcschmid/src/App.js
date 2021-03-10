import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'; 
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Research from './components/pages/Research';
import Videos from './components/pages/Videos';




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
          <Route path='/blog' component={Blog} />
        </Switch>
      </Router>
    </>
  );
}



export default App;