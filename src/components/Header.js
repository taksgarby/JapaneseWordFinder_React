import React from "react";
import styled from "styled-components";
import "./static/NavBar.css";


const Header = () => {
    const HeaderStyle = styled.header`
        background-color: #355E3B; 
        color: white;
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;

        justify-content: center;
        `

    return ( 
   
            <HeaderStyle>
                <h2 class="header">Japanese Word Finder</h2>
            </HeaderStyle>

     );
}
 
export default Header;