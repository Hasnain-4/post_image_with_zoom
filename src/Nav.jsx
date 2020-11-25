import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div >
            <nav >
                <ul>                    
                    <li><a><NavLink exact activeClassName='active_class' to = '/' >Home</NavLink> </a>  </li>        
                    <li><a><NavLink activeClassName='active_class' to = '/uploaded_image' >Dashboard</NavLink>  </a> </li>     
                    <li><a><NavLink activeClassName='active_class' to = '/zoom_image' >All Images</NavLink>  </a>   </li>   
                </ul>
            </nav>
        </div>
    )
}

export default Nav
