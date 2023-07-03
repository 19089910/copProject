import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaHome,
  FaChartBar,
  FaUserAlt,
  FaEnvelope,
  FaRegCalendarAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegSun
} from 'react-icons/fa'

import {
  Container,
  SidebarContainer,
  Content,
  SidebarItemContainer
} from './styles'

function Home () {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <>
      <Container>
        <FaBars onClick={showSidebar} />
      </Container>
      {sidebar && (
        <SidebarContainer sidebar={sidebar}>
          <FaTimes onClick={closeSidebar} />
          <Content>
            <SidebarItemContainer>
              <FaHome />
              Home
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaChartBar />
              Statistics
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaUserAlt />
              Users
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaEnvelope />
              Mail
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaRegCalendarAlt />
              Calendar
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaIdCardAlt />
              Employees
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaRegFileAlt />
              Reports
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaRegSun />
              Settings
            </SidebarItemContainer>
          </Content>
        </SidebarContainer>
      )}
    </>
  )
}

export default Home
