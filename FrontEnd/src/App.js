import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp.jsx';
import { CartProvider } from './Components/ContextReducer.jsx';
import './bootstrap/dist/js/bootstrap.bundle';
import './bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
function App() {
  return (
    <CartProvider>
      <Router>
        <div><Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/creatuser' element={<SignUp />} />
        </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
