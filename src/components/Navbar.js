import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

import { useAuthentication } from '../hooks/useAuthentication'

import { useAuthValue } from '../context/AuthContext'
import NavbarLink from './NavbarLink'

const Navbar = () => {

    const { user } = useAuthValue()

    return (
        <nav className={styles.navbar}>
            <NavbarLink isBrend={true}>
                Mini <span>Blog</span>
            </NavbarLink>
            <ul className={styles.links_list}>
                <NavbarLink>
                    Home
                </NavbarLink>
                <NavbarLink to='/about'>
                    Sobre
                </NavbarLink>
                {
                    user ?
                        <>
                            <NavbarLink to='/posts/create'>Novo post</NavbarLink>
                            <NavbarLink to='/dashboard'>Dashboard</NavbarLink>
                        </>
                        :
                        <>
                            <NavbarLink to='/login'>Entrar</NavbarLink>
                            <NavbarLink to='/register'>Registrar</NavbarLink>
                        </>
                }
            </ul>
        </nav>
    )
}

export default Navbar