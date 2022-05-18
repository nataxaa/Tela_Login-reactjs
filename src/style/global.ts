import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`

  :root{
    --background: #364652;
    --colorlogin: #0F1020;
  }

  *{
    margin: 0;
    padding:0 ;
   
  }

  body{
    background-color: var(--background) ;
    font-family:sans-serif;
  }

`
export const Container = styled.div`
  margin:1rem auto ;
  text-align:center ;
  

  nav a{
    margin:0 10px ;
    color: red ;
  }
  .buttonApp{
    background-color:black ;
    border: 0;
    border-radius:10px ;
    padding:5px ;
    color:red ;
    cursor: pointer;
  }


`
