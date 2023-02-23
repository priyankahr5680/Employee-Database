import './homeNavbar.css'
import { Link } from 'react-router-dom';
const HomeNavbar = () => {
    return (
        <div>
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
        <div className='employee_image'>
          <img style={{height:"500px", width:"1300px" ,marginTop:"10px"}} src="https://i0.wp.com/healthcheckscreening.com/wp-content/uploads/2017/11/AdobeStock_108067216.jpeg?fit=6168%2C2784&ssl=1" alt="" />
        </div>
        </div>
      );
}
 
export default HomeNavbar;