import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import Home from './Components/Home/Home';
import Nomatch from "./Components/Nomatch/Nomatch";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryName" element={<CountryDetails/>} />
      <Route path="*" element={<Nomatch/>} />
      
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
