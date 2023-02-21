import { Route, Routes } from "react-router-dom";
import AddEditItem from "./components/AddEditItem/AddEditItem";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse";
import AllInventory from "./components/AllInventory/AllInventory";
import DeleteWarehouse from "./components/DeleteModal/DeleteModal";
import Header from "./components/Header/Header";
import ItemDescription from "./components/ItemDescription/ItemDescription";
import SignUp from "./components/SignUp/SignUp";
import WarehouseFull from "./components/WarehouseFull/WarehouseFull";
import Warehouses from "./components/Warehouses/Warehouses";
import "./App.scss";
import Login from "./components/LogIn/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
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
