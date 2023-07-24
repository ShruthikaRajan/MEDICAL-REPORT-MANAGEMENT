import {Route,Routes} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Login from './COMPONENTS/Logins';
import Home from './COMPONENTS/Home';
import Report from './COMPONENTS/Report';
import Appoinment from './COMPONENTS/Appoinment';
import EHR from './COMPONENTS/EHR';
import Doctor from './COMPONENTS/Doctor';
import Aboutus from './COMPONENTS/Aboutus';
import contact from './COMPONENTS/contact';
import store from './COMPONENTS/store';
// import Reducer from './COMPONENTS/Reducer';
function App() {
  return (
   <div className="App">
    <Provider store={store}>

       <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/aboutus" element={<Aboutus/>}></Route>
            <Route path="/log" element={<Home/>}/>
            <Route path="/contact"element={<contact/>}></Route>
            <Route path="/report" element={<Report/>}/>
            <Route path="/appoinment"element={<Appoinment/>}/>
            <Route path="/EHR"element={<EHR/>}/>
            <Route path="/Doctor"element={<Doctor/>}/>
       </Routes>
       </Provider>
   </div>
  );
}
export default App;
