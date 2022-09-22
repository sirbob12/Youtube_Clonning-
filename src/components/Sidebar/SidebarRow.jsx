import React from 'react'
import './SidebarRow.scss'

const SidebarRow = ({Icon, title}) => {
  return (
    <section className="sidebarRow">
     <div className="icon">
         <Icon/>
         </div>
        <h1 className="sidebarRow__heading">{title}</h1>
       
    
    </section>
  )
}

export default SidebarRow