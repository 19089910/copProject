import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-style: normal; 
    font-weight: 700; 

}
body {
  width: 100vw;
  height: 100vh;
  background-color: #1a202c;
}
`
