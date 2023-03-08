import { LoginPage } from './pages/LoginPage';
import { Order } from './containers/Orders';
import { ProtectedRoute } from './containers/ProtectedRoute';
import { AuthProvider } from './utils/useAuth';
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>}>
            <Route path='my-orders' element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;
