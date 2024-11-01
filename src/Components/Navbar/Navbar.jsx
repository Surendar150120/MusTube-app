import React from 'react';
import "./Navbar.css";
import menu_icon from '../../assets/menu.png';
import logo_icon from '../../assets/play.png';
import Search_icon from '../../assets/search.png';
import Create_icon from '../../assets/upload.png';
import Notification_icon from '../../assets/notification.png';
import Profile_icon from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex_div'>
        <div className='nav_left flex_div'>
            <img className='menu_icon' onClick={() => setSidebar(prev => !prev)} src= {menu_icon} alt=''/>
            <Link to='/' className='logo_title'><img className='logo' src= {logo_icon} alt=''/><h3>MusTube</h3></Link>
        </div>

        <div className='nav_center flex_div'>
            <div className='search_box flex_div'>
            <input type='text' placeholder='Search'/>
            <img src= {Search_icon} alt='' />
            </div>
        </div>

        <div className="nav_right flex_div">
            <img src= {Create_icon} alt=''/>
            <img src= {Notification_icon} alt=''/>
            <img src= {Profile_icon} className='user_icon' alt=''/>
        </div>
    </nav>
  )
}

export default Navbar