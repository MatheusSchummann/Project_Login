import { useState } from "react";
import {FaUser, FaLock} from "react-icons/fa";
import "./Login.css";

const Login_sign = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sending data " + username + password);
  };

  return (
    <div className='container'> 
      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
          <div className="log_block">
            <input 
              type="email" 
              placeholder="e-mail" 
              required
              onChange={(e) => setUsername(e.target.value)}
            />
              <FaUser className="icon"/>
          </div>
            
          <div className="log_block">
            <input 
              type="password" 
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon"/>
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              <span className="remind_me_message">Remind me </span>
            </label>
            <a href="#">Forget password</a>
          </div>

          <button>Confirm</button>

        <div className="signup-link"> 
          <p>No account? <a href="#">Signup</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login_sign;
