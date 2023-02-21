import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import "./ItemDescription.scss";
type ItemDescriptionProps = {
  itemName?: string;
  itemDescription?: string;
  itemCategory?: string;
  itemStatus?: string;
  itemQuantity?: number;
  itemWarehouse?: string;
};
const ItemDescription = ({
  itemCategory,
  itemDescription,
  itemName,
  itemQuantity,
  itemStatus,
  itemWarehouse,
}: ItemDescriptionProps) => {
  return (
    <div className="itemdesc">
      <div className="itemdesc__header">
        <h1 className="itemdesc__header--heading">
          <img src={BackArrow} alt="back arrow" className="edit-icon" />
          <span>Television</span>
        </h1>
        <div className="itemdesc__header--icon">
          <img src={EditIcon} alt="edit icon" />
        </div>
      </div>
      <div className="itemdesc__details">
        <h4 className="itemdesc__details--label">ITEM DESCRIPTION</h4>
        <p className="itemdesc__details--description">
          This 50", 4K LED TV provides a crystal-clear picture and vivid colors.
        </p>
        <h4 className="itemdesc__details--label">CATEGORY:</h4>
        <p className="itemdesc__details--category">Electronics</p>
        <div className="itemdesc__details--status-qty">
          <span>
            <h4 className="itemdesc__details--label">STATUS:</h4>
            <p className="itemdesc__details--status">IN STOCK</p>
          </span>
          <span>
            <h4 className="itemdesc__details--label">QUANTITY:</h4>
            <p className="itemdesc__details--qty">500</p>
          </span>
        </div>
        <h4 className="itemdesc__details--label">WAREHOUSE:</h4>
        <p className="itemdesc__details--warehouse">Manhattan</p>
      </div>
    </div>
  );
};

export default ItemDescription;
