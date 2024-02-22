import React from 'react'
import styles from './Courses.module.css';
import { FaDisplay } from 'react-icons/fa6';
import { CiClock2 } from 'react-icons/ci';

const Courses = () => {
    return (
        <div className={styles.container}>
            <div className="courses">
                <div className="card">
                    <img src="https://assets.entrepreneur.com/content/3x2/2000/20190326201928-GettyImages-633710081-edit.jpeg" alt="" />
                    <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, molestias!</p>
                    <div style={{ width: '299px' }} className="divider"></div>
                    <div className={styles.title}>
                        <div className="two-line">
                            <div className="line">
                                <FaDisplay />
                                <p>120 video course</p>
                            </div>
                            <div className="line">
                                <CiClock2 />
                                <p>28 hours</p>
                            </div>
                        </div>
                    </div>
                    <button className={`button ${styles.title}`}>See more</button>
                </div>
            </div>
        </div>
    )
}

export default Courses
