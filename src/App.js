import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Login/Login/Login';
import Detail from './Pages/Detail/Detail/Detail';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/detail/:_id" element={<Detail />} /> */}

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
