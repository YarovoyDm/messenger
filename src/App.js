
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { LoginPage } from './Containers/LoginPage/LoginPage';
<<<<<<< HEAD
import { DialogsPage } from './Containers/DialogsPage/DialogsPage';
=======
import { SettingsPage } from "./Containers/SettingsPage/SettingsPage";
>>>>>>> 7ee831ce4f6c19e8fb9fac783fe4ac8aac306e43

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
<<<<<<< HEAD
        <Route path='/dialogs' component={DialogsPage} />
=======
        <Route path='/settings' component={SettingsPage} />
>>>>>>> 7ee831ce4f6c19e8fb9fac783fe4ac8aac306e43
      </Switch>
    </div>
  );
}

export default App;
