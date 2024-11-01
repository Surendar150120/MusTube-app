import React from 'react'
import './Sidebar.css'
import Home from'../../assets/home.png'
import Game_icon from'../../assets/game_icon.png'
import Automobiles from'../../assets/automobiles.png'
import Sports from'../../assets/sports.png'
import Entertainment from'../../assets/entertainment.png'
import Tech from'../../assets/tech.png'
import Music from'../../assets/music.png'
import Blogs from'../../assets/blogs.png'
import News from'../../assets/news.png'
import Jack from'../../assets/jack.png'
import Simon from'../../assets/simon.png'
import Tom from'../../assets/tom.png'
import Megan from'../../assets/megan.png'
import Cameron from'../../assets/cameron.png'
const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar? "" : "small_sidebar"}`}>
      <div className="shortcut_links">
        <div className={`side_link ${category===0 ? "active":""}`} onClick={() => setCategory(0)}>
            <img src={Home} alt=''/><p>Home</p>
        </div>
        <div className={`side_link ${category===20 ? "active":""}`} onClick={() => setCategory(20)}>
            <img src={Game_icon} alt=''/><p>Gaming</p>
        </div>
        <div className= {`side_link ${category===2 ? "active":""}`} onClick={() => setCategory(2)}>
            <img src={Automobiles} alt=''/><p>Automobiles</p>
        </div>
        <div className={`side_link ${category===17 ? "active":""}`} onClick={() => setCategory(17)}>
            <img src={Sports} alt=''/><p>Sports</p>
        </div>
        <div className={`side_link ${category===24 ? "active":""}`} onClick={() => setCategory(24)}>
            <img src={Entertainment} alt=''/><p>Entertainment</p>
        </div>
        <div className={`side_link ${category===28 ? "active":""}`} onClick={() => setCategory(28)}>
            <img src={Tech} alt=''/><p>Technology</p>
        </div>
        <div className={`side_link ${category===10 ? "active":""}`} onClick={() => setCategory(10)}>
            <img src={Music} alt=''/><p>Music</p>
        </div>
        <div className={`side_link ${category===22 ? "active":""}`} onClick={() => setCategory(22)}>
            <img src={Blogs} alt=''/><p>Blogs</p>
        </div>
        <div className={`side_link ${category===25 ? "active":""}`} onClick={() => setCategory(25)}>
            <img src={News} alt=''/><p>News</p>
        </div>
        <hr/>
        </div>
        <div className='subscribed_list'>
            <h3>Subscribed</h3>
            <div className="side_link">
                <img src={Jack} alt=''/><p>Ur.Ronaldo</p>
            </div>
            <div className="side_link">
                <img src={Simon} alt=''/><p>MR.Beast</p>
            </div>
            <div className="side_link">
                <img src={Tom} alt=''/><p>T-Series</p>
            </div>
            <div className="side_link">
                <img src={Megan} alt=''/><p>Pewdiepie</p>
            </div>
            <div className="side_link">
                <img src={Cameron} alt=''/><p>5-Minute Crafts</p>
            </div>
        </div>
      </div>
    
  )
}

export default Sidebar