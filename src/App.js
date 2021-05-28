import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Home from './Components/Home';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Article from './Components/Article';
import Login from './Components/Login';
import User from './Components/User';
import { UserContext } from './Contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: 'Tom Tickle',
    username: 'tickle122',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953',
  });

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
            <Route exact path='/topic/:category'>
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
            <Route exact path='/:username'>
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
