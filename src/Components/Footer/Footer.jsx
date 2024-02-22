import React from 'react'
import styles from './Footer.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2>Logo</h2>
                <div className="column">
                    <div className="line">
                        <FaPhoneAlt />
                        99009900
                    </div>
                    <div className='line'>
                        <CiMail />
                        uusku@gmail.com
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <p>Дэлгэрэнгүй мэдээлэл авахыг хүсвэл:</p>
                <input placeholder='Email' type="text" />
                <button className='button'>Илгээх</button>
            </div>
        </div>
    )
}

export default Footer
