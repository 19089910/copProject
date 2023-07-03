import { styled } from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-bottom: 10px;
    background: ${props => props.isHome ? '#D93856' : 'rgba(255, 255, 255, 0.14)'};
    cursor: pointer;
    border-radius: 20px;
    margin-top: 25px;
    //letras internas
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700; 
    font-size: 17px; 
    line-height: 28px; 
    text-decoration: none;


    color: #FFFFFF;

    &:hover{ 
        opacity: 0.8; 
    } 
     
    &:active{ 
        opacity: 0.5; 
    }
`
