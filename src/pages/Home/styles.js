import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`

export const SidebarContainer = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  margin-top: 100px;
`

export const SidebarItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a202c;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`
