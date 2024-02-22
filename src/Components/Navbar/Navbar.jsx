import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2>Logo</h2>
            </div>
            <div>
                <Link to={'/'} className={styles.link}>Нүүр хуудас</Link>
                <Link to={'/categories'} className={styles.link}>Хичээлийн төрөл</Link>
                <Link to={'/courses'} className={styles.link}>Бүх хичээл</Link>
                <Link to={'/login'} className={styles.link}>Нэвтрэх</Link>
            </div>
        </div>
    )
}

export default Navbar
