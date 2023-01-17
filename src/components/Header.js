import React from "react";
import styled from "styled-components";



const Header = () => {
    const HeaderStyle = styled.header`
        background-color: #355E3B; 
        color: white;
        display: flex;
        flex-direction: row;
        margin-bottom: 1em;

        justify-content: center;
        `

    return ( 
        <div>
            <HeaderStyle>
                <h2>Japanese Word Finder</h2>
            </HeaderStyle>
        </div>
     );
}
 
export default Header;