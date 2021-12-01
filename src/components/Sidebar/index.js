import React from 'react'
import { 
    SidebarContainer,
     Icon,
      CloseIcon,
       SidebarMenu,
        SidebarLink,
         SidebarRoute,
          SideBtnWrap
        } from './SideBarElements'

function SideBar() {
    return (
        
        <SidebarContainer>
                <Icon>
                    <CloseIcon />
                </Icon>

            <SidebarMenu>

                    <SidebarLink to='/'>Sushi</SidebarLink>
                    <SidebarLink to='/'>Delivery</SidebarLink>
                    <SidebarLink to='/'>Full Menu</SidebarLink>

            </SidebarMenu>

            <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>

    )
}

export default SideBar
