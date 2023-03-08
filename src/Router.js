import './App.css';
import { Login } from './components/Login';
import { Order } from './components/Orders';
import App from './components/App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/my-orders' element={<Order />}></Route>
        <Route path='/app' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
