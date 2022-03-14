import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    const NavLinkClassName = (p: { isActive: boolean }) => p.isActive ? `${s.navLinks} ${s.activeShadow}` : s.navLinks
    const [dropDown, setDropDown] = useState(false)

    return (
        <div className={s.wrap}>
            <span className={`${s.dropDownSpan} ${dropDown ? s.activeShadow : ''}`}
                  onClick={() => setDropDown(!dropDown)}>
                {/*&#9762;*/}
                &#9776;
            </span>
            <div className={s.buttonsBlockWrap}>
                <div className={`${dropDown ? s.deployed : s.collapsed} ${s.verticalAdjust}`}>
                    <NavLink className={NavLinkClassName}
                             to={PATH.PRE_JUNIOR}><span>PreJunior</span></NavLink>
                    <NavLink className={NavLinkClassName} to={PATH.JUNIOR}><span>Junior</span></NavLink>
                    <NavLink className={NavLinkClassName} to={PATH.JUNIOR_PLUS}><span>Junior-plus</span></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
