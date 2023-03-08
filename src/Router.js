import { LoginPage } from './pages/LoginPage';
import { Orders } from './containers/Orders';
import { Products } from './containers/Products';
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
            <Route path='my-orders' element={<Orders />} />
            <Route path='products' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;
