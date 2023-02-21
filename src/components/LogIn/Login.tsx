import './Login.scss'
import CustomButton from '../CustomButton/CustomButton';

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__heading">Create an Account</h1>
      <label htmlFor="email" className="login__label">
        Email
      </label>
      <input type="email" id="email" placeholder="Enter Email" required />
      <label className="login__label" htmlFor="password">
        Enter Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
        required
      />
    
      <div className="login__cta">
        <CustomButton className="login__cta--google">Login With Google</CustomButton>
        <CustomButton className="login__cta--submit">Sign Up</CustomButton>
      </div>
    </div>
  );
}

export default Login