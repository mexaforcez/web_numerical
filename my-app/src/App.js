import { NavBar } from './NavBar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Newton from './Interpolation/Newton';
import Lagrange from './Interpolation/Lagrange';

import Bisection from './Root_Of_Equation/Bisection';
import Graphical from './Root_Of_Equation/Graphical';
import Onepoint from './Root_Of_Equation/Onepoint';
import Newton_Raphson from './Root_Of_Equation/Newton_Raphson';
import Secant from './Root_Of_Equation/Secant';
import FalsePosition from './Root_Of_Equation/FalsePosition';

import Gauss_Jordan from './Solutions Root of equation/Gauss_Jordan';
import Gauss_elimination from './Solutions Root of equation/Gauss_elimination';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      
        <Route path='/Newton' element={<Newton/>}/>
        <Route path='/Bisection' element={<Bisection/>}/>
        <Route path='/Graphical' element={<Graphical/>}/>
        <Route path='/Onepoint' element={<Onepoint/>}/>
        <Route path='/Newton_Raphson' element={<Newton_Raphson/>}/>
        <Route path='/Secant' element={<Secant/>}/>
        <Route path='/FalsePosition' element={<FalsePosition/>}/>
        <Route path='/Lagrange' element={<Lagrange/>}/>
        <Route path='/Gauss_Jordan' element={<Gauss_Jordan/>}/>
        <Route path='/Gauss_elimination' element={<Gauss_elimination/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;