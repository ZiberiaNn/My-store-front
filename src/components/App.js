import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/my-orders'>Orders</Link></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
