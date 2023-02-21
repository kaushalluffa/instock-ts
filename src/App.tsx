import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AddEditItem from "./components/AddEditItem/AddEditItem";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse";
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
        <Route path="/edit-warehouse" element={<AddEditWarehouse/>}/>
        <Route path="/edit-warehouse/:id" element={<AddEditWarehouse/>}/>
        <Route path="/edit-item" element={<AddEditItem/>} />
        <Route path="/edit-item/:id" element={<AddEditItem/>} />
      </Routes>
      {/* <DeleteWarehouse/> */}
    </div>
  );
}

export default App;
