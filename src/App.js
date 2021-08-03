
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { LoginPage } from './Containers/LoginPage/LoginPage';
import { SettingsPage } from "./Containers/SettingsPage/SettingsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/settings' component={SettingsPage} />
      </Switch>
    </div>
  );
}

export default App;
