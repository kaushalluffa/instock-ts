import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import "./ItemInfo.scss";

type ItemInfoProps = {
  name: string;
  category: string;
  quantity: number;
  status: string;
} & React.ComponentProps<"a">;

const ItemInfo = ({
  name,
  category,
  quantity,
  status
}: ItemInfoProps) => {
  return (
    <div className="iteminfo">
      <div className="iteminfo__left">
        <h4 className="iteminfo__left--label">INVENTORY ITEM</h4>
        <Link to="/" className="iteminfo__left--link">
          Television
        </Link>
        <h4 className="iteminfo__left--label">CATEGORY</h4>
        <p className="iteminfo__left--category">Electronics</p>
        <CustomButton className="iteminfo__left--button">
          <img src={DeleteIcon} alt="delete icon" className="delete-button" />
        </CustomButton>
      </div>
      <div className="iteminfo__right">
        <h4 className="iteminfo__right--label">STATUS</h4>
        <p className={`iteminfo__right--status`}> IN STOCK</p>
        <h4 className="iteminfo__right--label">QTY</h4>
        <p className="iteminfo__right--qty">0</p>
        <CustomButton className="iteminfo__right--button">
          <img className="edit-button" src={EditIcon} alt="edit icon" />
        </CustomButton>
      </div>
    </div>
  );
};

export default ItemInfo;
