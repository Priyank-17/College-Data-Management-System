import react from "react";
import { Link } from "react-router-dom";
import './Top.css'

function Login() {
    return(
  <>
  <div className="align_right">
  <Link to="/login" className='link_rignt'>Login</Link>|
    <Link to="/register" className='link_rignt'>Sign up</Link>
  </div>
    
  </>
    );
}
export default Login;
