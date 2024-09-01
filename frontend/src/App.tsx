import { Home } from "./pages/home.tsx"
import { Dashboard } from "./pages/dashboard.tsx";
import { Homepage } from "./pages/homepage.tsx";
import { Post } from "./pages/post.tsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import { Postview } from "./pages/postview.tsx";
import { Signup } from "./pages/signup.tsx";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/"element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/:id" element={<Dashboard/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        <Route path="/view/:id"element={<Postview/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

