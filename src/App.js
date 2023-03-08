import Sidebar from "./components/sidebar";
import Table from "./pages/table";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
