import React from 'react'
import styles from './Home.module.css'
import { FaDisplay } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.landing}>
                <h2>Uuskus's Online Lesson</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio excepturi molestias obcaecati, officiis minima exercitationem illo explicabo fuga hic quibusdam. Earum repellat suscipit odio quidem sequi omnis animi officia accusantium iure, culpa consequatur eum voluptatum perferendis repellendus ea vel dolorem voluptatibus sit enim incidunt debitis. Illum a repellendus nobis quod enim asperiores ratione! Similique laboriosam libero in veritatis incidunt! </p>
                <Link className='button'>More <FaChevronRight /></Link>
            </div>
            <div className={styles.courses}>
                <h3>Сүүлд нэмэгдсэн хичээлүүд</h3>
            </div>
            <div className={styles.courses}>
                <div className={styles.card}>
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
                {/* fake */}
                <div className={styles.card}>
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
                <div className={styles.card}>
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
                <div className={styles.card}>
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

export default Home
