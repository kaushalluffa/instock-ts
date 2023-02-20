import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Warehouses from "./components/Warehouses/Warehouses";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses/>} />
      </Routes>
    </div>
  );
}

export default App;
