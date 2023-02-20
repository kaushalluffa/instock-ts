
import CustomButton from '../CustomButton/CustomButton';
import SingleInventory from '../SingleInventory/SingleInventory';
import './AllInventory.scss'
const AllInventory = () => {
  return (
    <div className='inventory'>
      <div className="inventory__header">
        <h1 className="inventory__header--heading">Warehouses</h1>
        <input
          className="inventory__header--search"
          type="search"
          placeholder="Search..."
        />
        <CustomButton
          variant="primary-blue"
          className="inventory__header--button"
        >
          + Add New Warehouse
        </CustomButton>
      </div>
      <SingleInventory/>
      <SingleInventory/>
      <SingleInventory/>
      <SingleInventory/>
      <SingleInventory/>
      <SingleInventory/>
    </div>
  );
}

export default AllInventory