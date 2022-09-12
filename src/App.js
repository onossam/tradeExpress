import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Getstarted from './Component/Getstarted'
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import Instant from './Component/Instant'
import Learn from './Component/Learn'
import Login from './Component/Login'
import Individual from './Component/Individual'
import Business from './Component/Business'
import Buy from './Component/Buy'
import Sell from './Component/Sell'
import Almostin from './Component/Almostin'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route index element = {<Home/>}/>
              <Route path= 'Instant' element = {<Instant/>} />
              <Route path='Learn' element = {<Learn/>} />
              <Route path='Login' element = {<Login/>} />
              <Route path= 'Getstarted' element={<Getstarted/>}/>
              <Route path= 'Individual' element = {<Individual/>} />
              <Route path= 'Business' element = {<Business/>} />
              <Route path='Buy' element = {<Buy/>} />
              <Route path='Sell' element = {<Sell/>} />
              <Route path='Almostin' element = {<Almostin/>} />
              
            </Routes>
          

        </BrowserRouter>
      
    </div>
  );
}

export default App;
