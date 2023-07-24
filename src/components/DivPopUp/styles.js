import styled from 'styled-components'

export const DivPopUp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 9999; /* Certifique-se de que o valor do z-index seja maior do que a <div> subjacente */
`