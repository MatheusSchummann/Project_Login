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
    <div className='Container'> 
      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
          <div className="Email_Block">
            <input 
              type="email" 
              placeholder="E-mail" 
              required
              onChange={(e) => setUsername(e.target.value)}
            />
              <FaUser ClassName="icon"/>
          </div>
            
          <div className="Password_Block">
            <input 
              type="password" 
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock ClassName="lock"/>
          </div>

          <div className="recall-forget">
            <label>
              <input type="chechbox" />
              Remind me 
            </label>
            <a href="#">Forget password</a>
          </div>

          <button>Confirm</button>

        <div ClassName="signup-link"> 
          <p>No account? <a href="#">Signup</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login_sign;
