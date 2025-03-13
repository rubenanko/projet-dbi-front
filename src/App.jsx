import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import HomePage from "./pages/HomePage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<p>404 - Error</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
