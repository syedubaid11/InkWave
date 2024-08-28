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

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/"element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

