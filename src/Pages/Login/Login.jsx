import React from 'react'
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/747/747011.png" alt="" />
            </div>
            <div className={styles.inputs}>
                <div className="column" style={{ alignItems: 'center' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '60px', fontWeight: 200 }}>Тавтай морил</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, unde.</p>
                    <br />
                    <input style={{ width: '200px' }} placeholder='Email' type="text" />
                    <input style={{ width: '200px' }} placeholder='Password' type="text" />
                    <br />
                    <button style={{ width: '220px' }} className='button'>Нэвтрэх</button>
                    <div className="two-line">
                        <div style={{ width: '100px' }} className="divider"></div>
                        Бүртгэлгүй бол
                        <div style={{ width: '100px' }} className="divider"></div>
                    </div>
                    <div className="two-line">
                        <p>Хэрэв та бүртгэлгүй бол</p>
                        <Link style={{ textDecoration: 'none' }}>Энд дарж</Link>
                        <p>Бүртгүүлнэ үү.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
