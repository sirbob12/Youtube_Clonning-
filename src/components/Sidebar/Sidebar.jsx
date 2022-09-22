import React from 'react'
import SidebarRow from '../Sidebar/SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

import './sidebar.scss'

const Sidebar = () => {
  return (
    <section className="sidebar">
        <SidebarRow  Icon={HomeOutlinedIcon} title='Home'/>
        <SidebarRow  Icon={HomeOutlinedIcon} title='Home'/>
        <SidebarRow  Icon={HomeOutlinedIcon} title='Home'/>
    </section>
  )
}

export default Sidebar