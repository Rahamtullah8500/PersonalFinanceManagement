import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';


function App() {
  return (
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
