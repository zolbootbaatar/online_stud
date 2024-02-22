import React from 'react'
import styles from './Categories.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const Categories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.categories}>
                <div className={styles.category}>
                    <img src="https://cdn-icons-png.flaticon.com/512/8759/8759045.png" alt="" />
                    <div className="line">
                        <h3>Development</h3>
                        <MdKeyboardArrowRight size={30} />
                    </div>
                    <div className="divider" style={{ width: '300px' }}></div>
                </div>
                <div className={styles.category}>
                    <img src="https://www.drawhipo.com/wp-content/uploads/2023/04/Marketing-Color-29-Socialmedia.png" alt="" />
                    <div className="line">
                        <h3>Marketing</h3>
                        <MdKeyboardArrowRight size={30} />
                    </div>

                    <div className="divider" style={{ width: '300px' }}></div>
                </div>
                <div className={styles.category}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1804/1804179.png" alt="" />
                    <div className="line">
                        <h3>Design</h3>
                        <MdKeyboardArrowRight size={30} />
                    </div>
                    <div className="divider" style={{ width: '300px' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Categories
