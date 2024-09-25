import { useState, useRef, useEffect } from "react";
import { FaUser, FaLock, FaCcApplePay } from "react-icons/fa";
import "./Login.css";


const Login_sign = () => {
  console.log("random");

  //const confirmlog = useRef(null)
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ email: emailRef.current.value, password: passwordRef.current.value})
  };

  console.log("teste2", formData);

  const onChange = (e) => {

    console.log('passwordRef :>> ', passwordRef);
    /* console.log("evento", e)
     setFormData({ ...formData, [e?.target?.name]: e?.target?.value })
     console.log('formData', formData)*/
  }

  return (
    <div className="main">
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <div className="log_block">
            <input
              name="email"
              type="email"
              placeholder="e-mail"
              required
              ref={emailRef}
            />
            <FaUser className="icon" />
          </div>

          <div className="log_block">
            <input
              name="password"
              type="password"
              placeholder="password"
              required
              ref={passwordRef}
            />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" id="inputID" />
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
    </div>
  );
}

export default Login_sign;