import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './views/login';
import Feed from './views/feed';
import Team from './views/team';
import Files from './views/files';
import NewFeed from './views/newFeed';

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/files" element={<Files/>}/>
        <Route path="/feed/newfeed" element={<NewFeed/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
