import './App.css';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Zoom from './Zoom'
import Error from './Error'

import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <>
    {/* <div className="App">
      <h2>Hello World!</h2>  
      <Forms/>
    </div> */}
    <Nav />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/uploaded_image' component={Dashboard}/>
        <Route path = '/zoom_image' component={Zoom}/>
        <Route component={Error}/>
      </Switch>

    </>
  );
}

{/* onClick={event =>  window.location.href='/your-href'} */}
export default App;
