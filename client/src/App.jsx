import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 px-0">
            <Sidebar />
          </div>
          <div className="col-10 px-0">
            <div className="container text-center">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
