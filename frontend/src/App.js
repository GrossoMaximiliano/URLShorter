import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import RedirectToUrl from './pages/Redirect';

function App() {
  return (
    <>
      <nav className="nav">
      
      </nav>
      <div className="content">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:url" component={RedirectToUrl} />

          </Switch>
        </HashRouter>
      </div>

      <footer className="footer">

      </footer>
    </>
  );
}

export default App;

