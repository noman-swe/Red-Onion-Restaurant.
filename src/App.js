import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./pages/SharedPages/Header/Header";
import Home from './pages/Home/Home';
import SignUp from './pages/LogRegContainer/SignUp/SignUp';
import NotFound from './pages/SharedPages/NotFound/NotFound';
import SignIn from './pages/LogRegContainer/SignIn/SignIn';
import Cart from './pages/CartContainer/Cart/Cart';
import RequireAuth from './pages/SharedPages/RequireAuth/RequireAuth';
import Shipment from './pages/CartContainer/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/shipment' element={<RequireAuth><Shipment></Shipment></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
