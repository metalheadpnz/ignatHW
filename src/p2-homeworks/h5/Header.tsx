import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to={'/test'}><div>testLInk</div></NavLink>
            <NavLink to={'/'}><div>Home</div></NavLink>
        </div>
    )
}

export default Header
