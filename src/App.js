
import './App.css';
import { BrowserRouter , Route , Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<div>HOME PAGE</div>} />
        <Route path="/about" element={<div>ABOUT PAGE</div>} />
        <Route path="/Contact" element={<div>CONTACT PAGE</div>} />
        <Route path="/Services" element={<div>Serveices PAGE</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
