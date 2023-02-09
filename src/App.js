import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './views/login';
import Feed from './views/feed';
import Team from './views/team';
import Files from './views/files';

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/files" element={<Files/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
