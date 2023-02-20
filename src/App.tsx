import { Route, Routes } from "react-router-dom";
import "./App.scss";
import DeleteWarehouse from "./components/DeleteWarehouse/DeleteWarehouse";
import Header from "./components/Header/Header";
import Warehouses from "./components/Warehouses/Warehouses";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses/>} />
      </Routes>
      {/* <DeleteWarehouse/> */}
    </div>
  );
}

export default App;
