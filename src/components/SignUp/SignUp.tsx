import CustomButton from "../CustomButton/CustomButton";
import './SignUp.scss'
const SignUp = () => {
  return (
    <div className="signup">
      <h1 className="signup__heading">Create an Account</h1>
      <label htmlFor="email" className="signup__label">
        Email
      </label>
      <input type="email" id="email" placeholder="Enter Email" required />
      <label className="signup__label" htmlFor="password">
        Enter Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
        required
      />
      <label htmlFor="cpassword" className="signup__label">
        Confirm Your Password
      </label>
      <input
        type="password"
        name="cpassword"
        placeholder="Confirm Your Password"
        id="cpassword"
      />
      <div className="signup__cta">
    <CustomButton className="signup__cta--login">Go to Login</CustomButton>
      <CustomButton className="signup__cta--submit">Sign Up</CustomButton>
      </div>
    </div>
  );
};

export default SignUp;
