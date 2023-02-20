import { Link } from "react-router-dom";
import RightChevron from "../../assets/Icons/chevron_right-24px.svg";
import CustomButton from "../CustomButton/CustomButton";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import "./SingleWarehouse.scss";
const SingleWarehouse = () => {
  return (
    <div className="singlewarehouse">
      <div className="singlewarehouse__left">
        <h4 className="singlewarehouse__left--heading">WAREHOUSE</h4>
        <Link to="/" className="singlewarehouse__left--heading-link">
          Manhattan
        </Link>
        <h4 className="singlewarehouse__left--heading">ADDRESS</h4>
        <p className="singlewarehouse__left--address">
          503 Broadway, New York, USA
        </p>
        <CustomButton className="singlewarehouse__left--button">
          <img src={DeleteIcon} alt="icon" />
        </CustomButton>
      </div>
      <div className="singlewarehouse__right">
        <h4 className="singlewarehouse__right--heading">CONTACT NAME</h4>
        <p className="singlewarehouse__right--heading-name">Parmin Aujla</p>
        <h4 className="singlewarehouse__right--heading">CONTACT INFORMATION</h4>
        <p className="singlewarehouse__right--address">
          <span>+1 629-550-0129</span>
          <span>paujla@instock.com</span>
        </p>
        <CustomButton className="singlewarehouse__right--button">
          <img src={EditIcon} alt="icon" />
        </CustomButton>
      </div>
    </div>
  );
};

export default SingleWarehouse;
