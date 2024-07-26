import { Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import { FormRow } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue=" " />  
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Don't have an account?{' '}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
      
    </Wrapper>
    
  )
}

export default Login