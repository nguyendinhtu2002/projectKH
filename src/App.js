import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import PageHome from './Screen/pageHome';
import Login from './Screen/loginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ServicesScreen from './Screen/ServicesScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/services' element={<ServicesScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
