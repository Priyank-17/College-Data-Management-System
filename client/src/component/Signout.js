import react from "react";
import { Link } from "react-router-dom";

import { signout } from '../helpers/auth';
import "./Top.css";


function Signouts() {
  return (
    <>
      <div className="align_right">
        <Link to="/" className="link_rignt" onClick={() => {
                    signout(() => {
                      
                      
                    });
                  }}>Signout</Link>
      </div>
    </>
  );
}
export default Signouts;
