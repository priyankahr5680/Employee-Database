import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'
const LoginPage=()=>{
  let navigate=useNavigate()
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  var handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
    }
  
    // handle submit
  };
  const isValidPassword = (password) => {
    return password.length >= 8;
  };
  
  var handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
    }
    if (!isValidPassword(password)) {
      alert('Password must be at least 8 characters');
      return;
    }
     navigate('/home/')
    // handle submit
  };
  return (
    <div className="image">
        <img width="60px" height="60px"  src="https://th.bing.com/th/id/OIP.nP_KPuTWO8EoqVEoP3wxNgHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" />
    <div className="login_page">
      <h1 style={{fontSize:"25px"}}>Login Page</h1>
      </div> 
       <div className="Loin_details">
    <form onSubmit={handleSubmit}>

      <label>User Name:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
 
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />

      <button style={{color:"white",backgroundColor:"lightgreen",border:"none"}} type="submit"> Submit</button>
    </form>
  </div>
  </div>
  );
}

export default LoginPage;