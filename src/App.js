import {BrowserRouter,Routes,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './views/login';
import Feed from './views/feed';

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
