import React from "react";
import styles from "./Styling/Ticket.module.css";
import { BsFillStarFill } from "react-icons/bs";

export const Ticket = ({ banner_image_url, movie_name, movie_grade, date, day, time, cinemas_name, silver, platinium }) => {
    return (
        <div className={styles.ticket}>
            <div className={styles.ticket__top}>
                <div className={styles.ticket__top__image}>
                    <img src={banner_image_url} alt="banner" />
                </div>
                <div className={styles.ticket__top__info}>
                    <div>
                        <span>{movie_name} </span>
                        <span> ({movie_grade})</span>
                    </div>
                    <div>
                        <span>{day.slice(0, 3)}, </span>
                        <span>{date} | </span>
                        <span>{time}</span>
                    </div>
                    <div>
                        <p>{cinemas_name}</p>
                    </div>
                </div>
            </div>
            <div className={styles.ticket__bottom}>
                <div className={styles.ticket__bottom__left__circle}></div>
                <div className={styles.ticket__bottom__right__circle}></div>
                <div className={styles.ticket__bottom__info}>
                    <div className={styles.ticket__bottom__info__number}><h1>{silver.length + platinium.length}</h1> <p>Tickets</p></div>
                    <div >
                        {silver.length > 0 &&
                            <div className={styles.ticket__bottom__info__seats}>
                                SILVER - {
                                    silver?.map((seat, index) => (
                                        <span key={index + 1}>{seat}{index !== silver.length - 1 && ","} </span>
                                    ))
                                }
                            </div>
                        }
                        {platinium.length > 0 &&
                            <div className={styles.ticket__bottom__info__seats}>
                                PLATINUM - {
                                    platinium?.map((seat, index) => (
                                        <span key={index + 1}>{seat}{index !== platinium.length - 1 && ","} </span>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div className={styles.ticket__bottom__info__stamp}>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <BsFillStarFill className={styles.ticket__bottom__info__stamp__text} />
                            <p className={styles.ticket__bottom__info__stamp__text}>Tickets</p><p className={styles.ticket__bottom__info__stamp__text}>booked</p>
                            <BsFillStarFill className={styles.ticket__bottom__info__stamp__text} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}