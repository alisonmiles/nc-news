import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Home from './Components/Home';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Article from './Components/Article';
import { useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/articles'>
            <Articles articles={articles} setArticles={setArticles} />
          </Route>
          <Route exact path='/articles/:article_id'>
            <Article articles={articles}/>
          </Route>
          <Route exact path='/topics'>
            <Topics />
          </Route>
          <Route exact path='/articles/'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
