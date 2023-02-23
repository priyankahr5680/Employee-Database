import './homeNavbar.css'
import { Link } from 'react-router-dom';
const Dash = () => {

    return ( 

<div className="dash">
<div className="logo">
              <img width="60px" height="60px"  src="https://th.bing.com/th/id/OIP.nP_KPuTWO8EoqVEoP3wxNgHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" />
        
        <div className="homeNavbar">
              <ul>
                <li><Link  to='/dash' style={{color:"black"}}>Home</Link></li>
                <li> <Link to='/dashboard' style={{color:"black"}}>Employee List</Link></li>               
                <li><Link  to='/' style={{color:"black"}}>Logout</Link></li>

              </ul>
        </div>
        </div>
       <h3 style={{marginTop:"0px",backgroundColor:"yellow"}}>DashBord</h3>
       <div className='welcome'>
       <h1 >Welcome to Admin Portal</h1>
       </div>

</div>
     );
}
 
export default Dash;