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
import ServicesSreen from './Screen/ServicesSreen';
import SupportScreen from './Screen/SupportScreen';
import ApiScreen from './Screen/ApiScreen';
import Code from './Screen/Code';
import NewOrder from './Screen/NewOrder';
import MassOrderScreen from './Screen/MassOrderScreen';
import MyOrderSreen from './Screen/MyOrderSreen';
import AddFundScreen from './Screen/AddFundScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/services' element={<ServicesSreen/>} />
        <Route path='/tickets' element={<SupportScreen/>} />
        <Route path='/api' element={<ApiScreen/>} />
        <Route path='/code.txt' element={<Code/>} />
        <Route path='/new' element={<NewOrder/>} />
        <Route path='/mass' element={<MassOrderScreen/>} />
        <Route path='/orders' element={<MyOrderSreen/>} />
        <Route path='/addfunds' element={<AddFundScreen/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
