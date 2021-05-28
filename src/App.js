import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Home from './Components/Home';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Article from './Components/Article';
import Login from './Components/Login';
import { UserContext } from './Contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('Please select a user');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className='App'>
          <Nav />
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/articles'>
              <Articles />
            </Route>
            <Route exact path='/articles/topic/:category'>
              <Articles />
            </Route>
            <Route exact path='/articles/:article_id'>
              <Article />
            </Route>
            <Route exact path='/topics'>
              <Topics />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
