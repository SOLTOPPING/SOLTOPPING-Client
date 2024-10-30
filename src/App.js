import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";
import Start from "./pages/Start";
import Test from "./pages/Test";
import Loading from "./pages/Loading";
import Hobby from "./pages/Hobby";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/test" element={<Test />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
