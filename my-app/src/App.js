import { NavBar } from './NavBar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Newton from './Interpolation/Newton';
import Bisection from './Root_Of_Equation/Bisection';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      jfdjytu
        <Route path='/Newton' element={<Newton/>}/>
        <Route path='/Bisection' element={<Bisection/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;