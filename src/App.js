import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";
import Start from "./pages/Start";
import Test from "./pages/Test";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/test" element={<Test />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
