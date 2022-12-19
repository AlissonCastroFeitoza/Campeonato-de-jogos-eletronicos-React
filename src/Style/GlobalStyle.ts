import {createGlobalStyle} from 'styled-components'

const globalstyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: white;
    overflow-x:hidden;
    font-family: 'Poppins', sans-serif;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    outline: none;
}


`

export default globalstyle