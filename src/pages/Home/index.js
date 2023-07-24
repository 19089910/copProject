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
  SidebarItemContainer,
  P
} from './styles'

import { Link } from 'react-router-dom';

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
          <P>ADMINISTRAÇÃO</P>

          <Link to="/home/holerite">
            <SidebarItemContainer>
              <FaHome />
                Holerite
            </SidebarItemContainer>
          </Link>

          <Link to="/home/funcionarios">
            <SidebarItemContainer>
              <FaIdCardAlt />
              Funcionarios
            </SidebarItemContainer>
          </Link>

          <Link to="/home/usuarios">
            <SidebarItemContainer>
              <FaUserAlt />
              Usuarios
            </SidebarItemContainer>
          </Link>

          <Link to='/home/adimicao'>
            <SidebarItemContainer>
              <FaRegFileAlt />
              Adimição
            </SidebarItemContainer>
          </Link>
          
          <P>PERFIL</P>
            <SidebarItemContainer>
              <FaEnvelope />
              Mail
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaRegCalendarAlt />
              Calendar
            </SidebarItemContainer>
            <SidebarItemContainer>
              <FaChartBar />
              Statistics
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
