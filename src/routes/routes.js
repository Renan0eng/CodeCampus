import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../views/login';
import Cadastro from '../views/cadastro';
import Feed from '../views/feed';
import Team from '../views/team';
import Files from '../views/files';
import NewPost from '../views/newPost';
import Post from '../views/post';
import Home from '../views/Home';
import Produtos from "../views/Produtos";
import NovosProdutos from "../views/Produtos/NovosProdutos";
import Assinaturas from "../views/Assinaturas";
import NovasAssinaturas from "../views/Assinaturas/NovasAssinaturas";
import { AuthProvider } from "../contexts/authContext";
import { PrivateRoute } from "./index";
import { Navigate } from "react-router-dom";

function App() {
  return (<>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/assinaturas" element={<Assinaturas />} />
          <Route path="/team" element={<PrivateRoute />}>
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/novosprodutos" element={<PrivateRoute />}>
            <Route path="/novosprodutos" element={<NovosProdutos />} />
          </Route>
          <Route path="/novasassinaturas" element={<PrivateRoute />}>
            <Route path="/novasassinaturas" element={<NovasAssinaturas />} />
          </Route>
          <Route path="/files" element={<PrivateRoute />}>
            <Route path="/files" element={<Files />} />
          </Route>
          <Route path="/newpost" element={<PrivateRoute />}>
            <Route path="/newpost" element={<NewPost />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>);
}

export default App;