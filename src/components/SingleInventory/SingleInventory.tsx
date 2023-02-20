import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import "./SingleInventory.scss";
const SingleInventory = () => {
  return (
    <div className="singleinventory">
      <div className="singleinventory__left">
        <h4 className="singleinventory__left--label">INVENTORY ITEM</h4>
        <Link to="/" className="singleinventory__left--link">
          Television
        </Link>
        <h4 className="singleinventory__left--label">CATEGORY</h4>
        <p className="singleinventory__left--category">Electronics</p>
        <CustomButton className="singleinventory__left--button">
          <img src={DeleteIcon} alt="delete icon" className="delete-button" />
        </CustomButton>
      </div>
      <div className="singleinventory__right">
        <h4 className="singleinventory__right--label">STATUS</h4>
        <p className={`singleinventory__right--status`}> IN STOCK</p>
        <h4 className="singleinventory__right--label">QTY</h4>
        <p className="singleinventory__right--qty">0</p>
        <h4 className="singleinventory__right--label">WAREHOUSE</h4>
        <p className="singleinventory__right--warehouse">Manhattan</p>
        <CustomButton className="singleinventory__right--button">
          <img className="edit-button" src={EditIcon} alt="edit icon" />
        </CustomButton>
      </div>
    </div>
  );
};

export default SingleInventory;
