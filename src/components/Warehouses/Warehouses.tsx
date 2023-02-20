import CustomButton from "../CustomButton/CustomButton"
import SingleWarehouse from "../SingleWarehouse/SingleWarehouse"
import './Warehouses.scss'
const Warehouses = () => {
  return (
    <div className="warehouses">
        <div className="warehouses__header">
            <h1 className="warehouses__header--heading">Warehouses</h1>
            <input className="warehouses__header--search" type="search" placeholder="Search..." />
            <CustomButton variant="primary-blue" className="warehouses__header--button" >+ Add New Warehouse</CustomButton>
        </div>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
        <SingleWarehouse warehouseAddress="" warehouseName="" contactEmail="" contactName="" contactPhone=""/>
    </div>
  )
}

export default Warehouses