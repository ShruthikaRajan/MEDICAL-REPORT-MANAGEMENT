import {Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './COMPONENTS/Logins';
import Home from './COMPONENTS/Home';
function App() {
  return (
   <div className="App">
       <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/log" element={<Home/>}/>
       </Routes>
   </div>
  );
}
export default App;
