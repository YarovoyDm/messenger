
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { DialogsPage } from './Components/DialogsPage/DialogsPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/dialogs' component={DialogsPage} />
      </Switch>
    </div>
  );
}

export default App;
