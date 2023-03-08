import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='my-orders'>Orders</Link></li>
        <li></li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default HomePage;
