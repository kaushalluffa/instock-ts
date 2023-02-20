import Cross from "../../assets/Icons/close-24px.svg";
import CustomButton from "../CustomButton/CustomButton";
import "./DeleteModal.scss";
type DeleteModalProps = {
  question?: string;
  message?: string;
  onClick?: () => void;
};
const DeleteModal = (props: DeleteModalProps) => {
  return (
    <div className="delete">
      <div className="delete__cross">
        <img src={Cross} alt="cross icon" className="delete__cross--icon" />
      </div>
      <div className="delete__question">Delete Washington warehouse?</div>
      <div className="delete__message">
        Please confirm that you'd like to delete the Washington from the list of
        warehouses. You won't be able to undo this action.
      </div>
      <div className="delete__buttons">
        <CustomButton className="delete__buttons--cancel">Cancel</CustomButton>
        <CustomButton
          className="delete__buttons--delete"
          variant="secondary-red"
        >
          Delete
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteModal;
