import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact>
          </Route>
          <Route path="/dashboard" component={Dashboard} exact>
          </Route>
          <Route path="/addpost" component={PostForm} exact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
