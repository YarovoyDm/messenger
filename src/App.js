
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { LoginPage } from './Components/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
