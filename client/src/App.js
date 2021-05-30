
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
<div className="App">
  <Header/>
</div>

  );
}

export default App;
