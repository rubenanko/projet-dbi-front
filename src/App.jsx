import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'

import HomePage from "./pages/HomePage.jsx";

function App() {

  var userData = window.sessionStorage.getItem("userData");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage userData={userData}/>}/>
        <Route path="/home" element={<HomePage userData={userData}/>} />
        <Route path="*" element={<p>404 - Error</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
