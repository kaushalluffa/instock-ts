import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import './WarehouseFull.scss'
const WarehouseFull = () => {
  return (
    <div className="container">
      <div className="container__heading">
        <h1 className="container__heading--title">
          <img className="title-icon" src={BackArrow} alt="back arrow" />
          Washington
        </h1>
        <div className="container__heading--edit">
          <img className="edit-icon" src={EditIcon} alt="edit icon" />
        </div>
      </div>
      <div className="container__details">
        <div className="container__details--address">
          <h4 className="container__details--address-title">
            WAREHOUSE ADDRESS
          </h4>
          <p className="container__details--address-ad">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="container__details--contact">
          <div className="container__details--contact-name">
            <h4 className="container__details--contact-title">CONTACT NAME</h4>
            <p className="contact-info-name">
              <span>Graeme Lyon</span>
              <span>Warehouse Manager</span>
            </p>
          </div>
          <div className="container__details--contact-info">
            <h4 className="container__details--contact-title">
              CONTACT INFORMATION
            </h4>
            <p className="contact-info-email">
              <span>+1 647-504-0911</span>
              <span>glyon@instock.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseFull;
