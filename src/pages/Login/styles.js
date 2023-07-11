import styled from 'styled-components'

export const InputLabel = styled.p`
    color: #EEEEEE;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-top: 20px;

    margin-left: 25px;
    border: #EEEEEE;

`
export const Input = styled.input`
    width: 342px;
    height: 58px;
    background-color: #1a202c;
    border-radius: 14px;

    

    //LETRA INTERNA: 
    padding-left: 25px; 
    font-weight: 400; 
    font-size: 20 px; 
    line-height: 28px; 
    color: #FFFFFF; 
`

export const P = styled.p`
    color: antiquewhite;
`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-bottom: 10px;
    background:  #D93856;
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

    transition: all .3s ease-in-out;
    z-index: 1;
    overflow: hidden;


    color: #FFFFFF;

    &:hover{ 
        opacity: 0.8; 
    } 
     
    &:active{ 
        opacity: 0.5; 
    }
`