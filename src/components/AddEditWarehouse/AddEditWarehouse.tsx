import './AddEditWarehouse.scss'
import BackArrow from '../../assets/Icons/arrow_back-24px.svg'
import CustomButton from '../CustomButton/CustomButton';

const AddEditWarehouse = () => {
  return (
    <div className="form">
      <div className="form__header">
        <h1 className="form__header--heading">
          <span>
            <img src={BackArrow} alt="back arrow" className="back-arrow" />
          </span>
          <span>Edit Warehouse</span>
        </h1>
      </div>
      <div className="form__warehousedetails">
        <h2 className="form__warehousedetails--heading">Warehouse Details</h2>
        <label
          className="form__warehousedetails--label"
          htmlFor="warehouse-name"
        >
          Warehouse Name
        </label>
        <input
          type="text"
          id="warehouse-name"
          placeholder="Warehouse Name"
          value=""
        />
        <label
          className="form__warehousedetails--label"
          htmlFor="warehouse-address"
        >
          Street Address
        </label>
        <input
          type="text"
          id="warehouse-address"
          placeholder="Street Address"
          value=""
        />
        <label
          className="form__warehousedetails--label"
          htmlFor="warehouse-city"
        >
          Warehouse City
        </label>
        <input
          type="text"
          id="warehouse-city"
          placeholder="Warehouse City"
          value=""
        />
        <label
          className="form__warehousedetails--label"
          htmlFor="warehouse-country"
        >
          Warehouse Country
        </label>
        <input
          type="text"
          id="warehouse-country"
          placeholder="Warehouse Country"
          value=""
        />
      </div>
      <div className="form__warehousedetails">
        <h2 className="form__warehousedetails--heading">Contact Details</h2>
        <label className="form__warehousedetails--label" htmlFor="contact-name">
          Contact Name
        </label>
        <input
          type="text"
          id="contact-name"
          placeholder="Contact Name"
          value=""
        />
        <label
          className="form__warehousedetails--label"
          htmlFor="contact-position"
        >
          Position
        </label>
        <input
          type="text"
          id="contact-position"
          placeholder="Position"
          value=""
        />
        <label className="form__warehousedetails--label" htmlFor="phone-number">
          Phone Number
        </label>
        <input
          type="number"
          id="phone-number"
          placeholder="Phone Number"
          value=""
        />
        <label className="form__warehousedetails--label" htmlFor="email">
          Email
        </label>
        <input type="email" id="email" placeholder="Email" value="" />
      </div>
      <div className="form__cta">
        <CustomButton className='form__cta--cancel'>Cancel</CustomButton>
        <CustomButton className='form__cta--submit'>+ Add Warehouse</CustomButton>
      </div>
    </div>
  );
}

export default AddEditWarehouse