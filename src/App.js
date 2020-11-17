import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Product from './pages/Product';
import Report from './pages/Report';
import Team from './pages/Team';
import Message from './pages/Message';
import Support from './pages/Support';
function App() {
  return (
    <div className="App">
      <>
      <Router>
      <Sidebar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product" component={Product}/>
          <Route path="/report" component={Report}/>
          <Route path="/team" component={Team}/>
          <Route path="/message" component={Message}/>
          <Route path="/support" component={Support}/>
        </Switch>
      </Router>
      
      </>
    </div>
  );
}

export default App;
