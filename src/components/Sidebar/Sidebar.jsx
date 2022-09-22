import React from 'react'
import SidebarRow from '../Sidebar/SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';

import './sidebar.scss'

const Sidebar = () => {
  return (
    <section className="sidebar">
        <SidebarRow  Icon={HomeOutlinedIcon} title='Home'/>
        <SidebarRow  Icon={WhatshotOutlinedIcon} title='Trending'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
       
        <hr/>

        <SidebarRow  Icon={HistoryOutlinedIcon} title='History'/>
        <SidebarRow  Icon={VideoSettingsOutlinedIcon} title='Liked Videos'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>

        <hr/>

       
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
        <SidebarRow  Icon={SubscriptionsOutlinedIcon} title='Subscription'/>
       
    </section>
  )
}

export default Sidebar