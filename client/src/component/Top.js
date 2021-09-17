import react from 'react';
import { authenticate, isAuth } from '../helpers/auth';
import Login from './Login'
import Signout from './Signout'
import './Top.css'
function Greeting(props) {
    
    if (isAuth()) {
      return <Signout />;
    }
    return <Login />;
  }

  function Top(){
      return(<div> 
        <Greeting/>
        <hr/>
        </div>
      );
  }
  export default Top;