import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AllInventory from "./components/AllInventory/AllInventory";
import DeleteWarehouse from "./components/DeleteModal/DeleteModal";
import Header from "./components/Header/Header";
import ItemDescription from "./components/ItemDescription/ItemDescription";
import WarehouseFull from "./components/WarehouseFull/WarehouseFull";
import Warehouses from "./components/Warehouses/Warehouses";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/washington" element={<WarehouseFull />} />
        <Route path="/inventory" element={<AllInventory />} />
        <Route path="/television" element={<ItemDescription/>}/>
      </Routes>
      {/* <DeleteWarehouse/> */}
    </div>
  );
}

export default App;
