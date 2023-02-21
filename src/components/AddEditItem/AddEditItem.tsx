import CustomButton from "../CustomButton/CustomButton";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./AddEditItem.scss";
const AddEditItem = () => {
  return (
    <div className="form">
      <div className="form__header">
        <h1 className="form__header--heading">
          <span>
            <img src={BackArrow} alt="back arrow" className="back-arrow" />
          </span>
          <span>Edit Inventory Item</span>
        </h1>
      </div>
      <div className="form__itemdetails">
        <h3 className="form__itemdetails--heading">Item Details</h3>
        <label htmlFor="item-name" className="form__itemdetails--label">
          Item Name
        </label>
        <input type="text" placeholder="Television" />
        <label htmlFor="item-desc" className="form__itemdetails--label">
          Item Description
        </label>
        <textarea
          name="item_desc"
          id="item-desc"
          value={`This 50", 4K LED TV provides a crystal-clear picture and vivid colors.`}
        ></textarea>
        <label htmlFor="item-category" className="form__itemdetails--label">
          Item Category
        </label>
        <select name="item_category" id="item-category">
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div className="form__itemdetails">
        <h3 className="form__itemdetails--heading">Item Availability</h3>
        <label htmlFor="item-status" className="form__itemdetails--label">
          Status
        </label>
        <span className="radios">
          <span className="in_stock">
            <input type="radio" name="status" id="in-stock" />
            <label htmlFor="in-stock" className="radio-label">
              In Stock
            </label>
          </span>
          <span className="out_of_stock">
            <input type="radio" name="status" id="out-of-stock" />
            <label htmlFor="out-of-stock" className="radio-label">
              Out of Stock
            </label>
          </span>
        </span>
        <label htmlFor="item-warehouse" className="form__itemdetails--label">
          Item Warehouse
        </label>
        <select name="item_warehouse" id="item-warehouse">
          <option value="Manhattan">Manhattan</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Manhattan">Manhattan</option>
        </select>
      </div>
      <div className="form__cta">
        <CustomButton className="form__cta--cancel">Cancel</CustomButton>
        <CustomButton className="form__cta--submit">+ Add Item</CustomButton>
      </div>
    </div>
  );
};

export default AddEditItem;
