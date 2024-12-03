import logo from './logo.svg';
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Headers from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Logout from './components/Logout';
import Category from './components/Category';
import Mobiles from './components/Mobiles';
import Grocery from './components/Grocery';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/Logout' element={<Logout></Logout>}></Route>
        <Route path='/Category' element={<Category></Category>}></Route>
        <Route path='/Fashion' element={<Fashion></Fashion>}></Route>
        <Route path='/Electronics' element={<Electronics></Electronics>}></Route>
        <Route path='/Grocery' element={<Grocery></Grocery>}></Route>
        <Route path='/Mobiles' element={<Mobiles></Mobiles>}></Route>



        <Route path='*' element={<Error></Error>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
