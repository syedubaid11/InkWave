import { Home } from "./pages/home.tsx"
import { Dashboard } from "./pages/dashboard.tsx";
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
        <Route path="/"element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

