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
         
        </div>
        </div>
      );
}
 
export default HomeNavbar;