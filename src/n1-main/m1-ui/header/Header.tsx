import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../routes/Routes'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header} >
            
            <NavLink to={PATH.LOGIN} className={s.link} activeClassName={s.active} >login</NavLink>
            <NavLink to={PATH.REGISTER} className={s.link} activeClassName={s.active} >register</NavLink>
            <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.active} >profile</NavLink>
            <NavLink to={PATH.RESET_PASSWORD} className={s.link} activeClassName={s.active} >reset password</NavLink>
            <NavLink to={PATH.NEW_PASSWORD} className={s.link} activeClassName={s.active} >new password</NavLink>
            <NavLink to={PATH.PREVIEW} className={s.link} activeClassName={s.active} >preview</NavLink>
            
        </div>
    )
}

export default Header
