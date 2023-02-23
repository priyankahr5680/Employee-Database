
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './Page/Dashboard/LoinPage';
import Home from './Page/Dashboard/homeNavbar';
import Dash from './Page/Dashboard/dash';
import Dashboard from './Page/Dashboard';

function App() {
   
    
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
           <Route path='/'element={<LoginPage/>}/>
           <Route path='/home'element={<Home/>}/>
           <Route path='/dash'element={<Dash/>}/>
           <Route path='/dashboard'element={<Dashboard/>}/>
           

      </Routes>
      </BrowserRouter>
     
     
       
      </div>
  );
      }

export default App;
