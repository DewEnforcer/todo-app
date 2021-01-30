import {ToastContainer} from "react-toastify";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Todos from "./components/Todos";
import LoginForm from './components/LoginForm';
import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from './components/common/protectedRoute';
import Logout from "./components/Logout";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToastContainer/>
      <div className="content">
      <Switch>
        <ProtectedRoute path="/todos" component={Todos}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/register" component={RegisterForm}/>
        <Route path="/logout" component={Logout}/>
        <Redirect from="/" exact to="/todos"/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
