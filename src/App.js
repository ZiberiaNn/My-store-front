import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Order } from './components/Orders';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/my-orders'>Orders</Link></li>
        <li></li>
      </ul>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/my-orders' element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
