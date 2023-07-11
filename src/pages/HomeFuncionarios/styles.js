import styled from 'styled-components'

export const Body = styled.div`

`
export const DivPopUp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 9999; /* Certifique-se de que o valor do z-index seja maior do que a <div> subjacente */
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9998;
`


export const Container = styled.div`
  margin-left: 300px;
`
export const H1 = styled.h1`
  color: white;
  margin-top: 25px;
  margin-bottom: 50px;
  font-size:50px;
  
`
export const H2 =  styled.h2`
  color: white;
  font-size: 20px;
  margin-left: 50px;

`

export const ConteinerManu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 20px 2px;
  margin-right: 50px;
`

export const ContainerTable = styled.div`
  margin-right: 50px;
`

