import React from 'react'
import { Link } from 'react-router-dom'
import UserImg from '../../images/user.png'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <div className="logo">Movie App</div>
            <div className="user-image">
                <img src={UserImg} alt="user" />
            </div>
            </Link>
        </div>
    )
}

export default Header
