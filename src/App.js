import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  if (isAuthenticated) {
    return (
    <><Dashboard /></>)
  }
  else {
    return (
      <><Login /></>);
  }


}

export default App;
