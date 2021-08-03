
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { LoginPage } from './Containers/LoginPage/LoginPage';
import { DialogsPage } from './Containers/DialogsPage/DialogsPage';

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
