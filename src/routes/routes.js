import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from '../views/login';
import Cadastro from '../views/cadastro';
import Feed from '../views/feed';
import Team from '../views/team';
import Files from '../views/files';
import NewPost from '../views/newPost';
import { AuthProvider } from "../contexts/authContext";
import { PrivateRoute } from "./index";

function App() {
  return (<>
    <BrowserRouter>
    	<AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/feed" element={<PrivateRoute />}>
            <Route path="/feed" element={<Feed/>}/>
          </Route>
          <Route path="/team" element={<PrivateRoute />}>
            <Route path="/team" element={<Team/>}/>
          </Route>
          <Route path="/files" element={<PrivateRoute />}>
            <Route path="/files" element={<Files/>}/>
          </Route>
          <Route path="/newpost" element={<PrivateRoute />}>
            <Route path="/newpost" element={<NewPost/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>);
}

export default App;