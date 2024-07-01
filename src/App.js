import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
