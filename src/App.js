import Sidebar from "./components/sidebar";
import Table from "./components/table";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          {/* <Route  path="/" element={<Home />} /> */}
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
