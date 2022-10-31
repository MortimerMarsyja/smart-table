import { createGlobalStyle } from 'styled-components';
import colorPalette from './colorPalette';
import makeSpace from '../06-Utils/spacing-function/index.ts';

const GlobalStyle = createGlobalStyle`
    body{
        font-family:Helvetica,Arial,sans-serif;
        height:100%;
    }
   .hor-form{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
   .hor-capsule {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 12px;
    /* box-shadow: 0 1px 6px 0 #171717; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   }
   .rounded{
            border-radius: 50px;
            padding:0.4em 1.2em;
    }
    .small{
        height: 0.4em;
        box-sizing: content-box;
        line-height: 4px;
        width: 0.4em;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    * {
        margin: 0;
        padding: 0;
        font-size: 1em;
        font-family: inherit;
    }
        html {
        font-size: 62.5%;
    }
    ul{ 
        list-style-type: none;
    }
    h1{
        font-size:3.2em;
        color:${colorPalette.blueColor};
        font-weight:700;
        line-height: 1em;
        margin:${makeSpace('big')} 0;
        color:${colorPalette.greyColors[700]};
    }
    h2{
        font-size:2.8em;
        font-weight: 600;
        line-height: 1em;
        margin: ${makeSpace('medium')} 0;
        color:${colorPalette.greyColors[600]};
    }
    h3{
        font-size:2.4em;
        font-weight:500;
        margin: ${makeSpace('medium')} 0;
        color:${colorPalette.blueColor};
    }
    h4{
        font-size:2.2em;
        font-weight:400;
        margin: ${makeSpace('small')} 0;
        color:${colorPalette.greyColors[700]};
    }
    p{
        font-size:1.8em;
        width:200px;
        line-height:1.2em;
    }
    button{
    text-transform: uppercase;
    font-size: 1.8em;
    border-radius: 3px;
    padding: 6px;
    background-color:${colorPalette.pinkColor};
    color:${colorPalette.whiteColor};
    border: none;
    font-weight: bold;
    box-sizing : content-box;
    &:active,focus{
        outline: 0;
    }
}
`;

export default GlobalStyle;
