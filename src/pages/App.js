import "../style/App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout"; //"./AppLayout"; // Import AppLayout component

import Home from "./home/Home";
import Employees from "./employees/Employees";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <AppLayout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="employees" element={<Employees />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
