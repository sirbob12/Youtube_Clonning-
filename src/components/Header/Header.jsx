import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';

//import css
import './Header.scss'

const Header = () => {
  return (
    <header className="navbar">
        <div className="header__left-section">
            <MenuOutlinedIcon  className='menu__icon'/>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" 
            alt="navbar_logo" 
            className="navbar__logo" 
            />
        </div>

        <div className="header__center-section">
            <input type="text"  placeholder='Search'  className='formInput'/>
            <SearchOutlinedIcon className='searchBtn'/>
            
        </div>

        <div className="header__right-section">
            <VideoCallOutlinedIcon  className='video_icon'/>
            <NotificationsNoneSharpIcon className='notifications'/>    
            <Avatar
             alt='avatar__logo'
             src='https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=2000'
             className='avatar__logo'
            />       
        </div>
    </header>
  )
}

export default Header