import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/frontend/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
