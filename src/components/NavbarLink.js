import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const NavbarLink = ({ to = '/', isBrend = false, children }) => {
    const styleActiveLink = (isActive) => (isActive ? styles.active : '')

    const getNavLink = (
        <NavLink
            to={to}
            className={isBrend ? styles.brand : ({ isActive }) => styleActiveLink(isActive)}
        >
            {children}
        </NavLink>
    )

    return (
        <>
            {isBrend ? getNavLink : <li>{getNavLink}</li>}
        </>
    )
}

export default NavbarLink