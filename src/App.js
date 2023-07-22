
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Video from './Components/Video';
import Labtest from './Components/Labtest';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='Video' element={<Video/>}/>
          <Route path='Labtest' element={<Labtest/>}/>
          
        </Route>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
