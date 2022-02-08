import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";

import Menu from './components/Menu';


import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
