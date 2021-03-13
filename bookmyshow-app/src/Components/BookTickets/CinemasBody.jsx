import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsHeartFill, BsCircleFill } from "react-icons/bs";
import { VscDeviceMobile } from "react-icons/vsc";
import { IoFastFoodOutline } from "react-icons/io5";
import styles from "../Styling/Cinemas.module.css";
import { handleAddingSeatingData, handleSelectNameTime } from "../../Redux/booking_details/actions";
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Seating from "../Seating";
import SummaryPage from "../../Pages/SummeryPage"

export const CinemasBody = ({ filters }) => {
    const cinemas_data = useSelector(state => state.cinemas.cinemas_data);
    const date = useSelector(state => state.booking_details.date);
    const data = useSelector(state => state.booking_details);
    const dispatch = useDispatch();
    // console.log(cinemas_data);
    let filteredData = cinemas_data;
    const [seatingModalOpen, setSeatingModalOpen] = useState(false);
    const [foodModalOpen, setFoodModalOpen] = useState(false);

    const handleFilter = () => {
        if (filters.length) {
            filteredData = cinemas_data?.filter(item => {
                return filters.indexOf(item.sub_region) >= 0
            })
        }
    }

    handleFilter();
    React.useEffect(() => {
        window.scrollTo(window.scrollX, 0);
    }, [seatingModalOpen])


    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        if (hours < 10) hours = "0" + hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    const time = formatAMPM(new Date())
    const amOrPm = time[time.length - 2] + time[time.length - 1]
    const currentTime = time.split(":").map(Number).shift();
    // const currentMinutes = +time.split(":")[1].split(" ").shift();
    // console.log(typeof currentMinutes);
    // console.log(amOrPm)

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setSeatingModalOpen(!seatingModalOpen);
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };


    const handleClick = (name, time) => {
        dispatch(handleSelectNameTime(name, time))
        showModal();
    }

    const handleCloseSeatingModal = (seatingData) => {
        setSeatingModalOpen(false);
        setFoodModalOpen(true)
        dispatch(handleAddingSeatingData(seatingData));
    }

    const handleCloseFoodModal = () => {
        setFoodModalOpen(false)
    }

    const handleCloseSeatingButton = () => {
        setSeatingModalOpen(false);
    }


    return seatingModalOpen ? <Seating handleCloseSeatingButton={handleCloseSeatingButton} seatingActive={seatingModalOpen} handleCloseSeatingModal={handleCloseSeatingModal} /> : (
        <div className={styles.container} >
            <SummaryPage foodModalOpen={foodModalOpen} handleCloseFoodModal={handleCloseFoodModal} />
            <Modal
                title="Terms & Conditions"
                visible={visible}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={confirmLoading} onClick={handleOk} style={{ backgroundColor: "#F84464", border: "none" }}>
                        Accept
                    </Button>,
                ]}
            >
                <div className={styles.modalText}>
                    <p>1. For your own safety, wearing face masks is compulsory for entering the cinema premises.</p>
                    <p>2. Temperature checks will be conducted at the cinema.Patrons with high temperature (above 37.3 C or 99.14 F) will not be allowed inside.</p>
                    <p>3. Entry is allowed only for valid ticket holders.</p>
                    <p>4. Guests aged under 18 will not be allowed in "A" rated movies.</p>
                    <p>5. Children above the age of 3 years require tickets for "U" or "U / A" rated movies.</p>
                    <p>6. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.</p>
                    <p>7. Tickets once purchased cannot be cancelled, exchanged or refunded.</p>
                    <p>8. Guest Agrees to be contacted by INOX Management for the purpose of seeking feedback for service improvement.</p>
                    <p>9. Decision(s) taken by INOX shall be final and binding, Rights of admission reserved.</p>
                    <p>10. Outside food and beverages are not allowed inside the cinema premises.</p>
                    <p>11. Contactless food and beverage purchase transaction and self pick -up from the counter.</p>
                </div>
            </Modal>
            <div className={styles.container__info}>
                <div>
                    <BsCircleFill style={{ color: "#4ABD5D", fontSize: 10 }} />
                    <span>AVAILABLE</span>
                </div>
                <div>
                    <BsCircleFill style={{ color: "rgb(253, 102, 0)", fontSize: 10 }} />
                    <span>FAST FILLING</span>
                </div>
            </div>
            <div style={{ padding: "15px" }}>
                {
                    filteredData?.map(cinema => (
                        <div key={cinema._id} className={styles.container__card}>
                            <div className={styles.container__card__title}>
                                <BsHeartFill className={styles.container__card__title__icon} />
                                <h4>{cinema.name}</h4>
                            </div>
                            <div className={styles.container__card__info}>
                                <div className={styles.container__card__info__options}>
                                    <div style={{ color: "#49BA8E" }}>
                                        <VscDeviceMobile />
                                        <span>M-Ticket</span>
                                    </div>
                                    <div style={{ color: "#FFB23F" }}>
                                        <IoFastFoodOutline />
                                        <span>F&B</span>
                                    </div>
                                </div>
                                <div className={styles.container__card__info__times__container}>
                                    <div>
                                        {
                                            cinema.timings?.map((time, index) => {
                                                const showTime = time.time.split(":").map(Number).shift();
                                                const showMinutes = +time.time.split(":")[1].split(" ").shift();
                                                // console.log(showTime, currentTime, showMinutes, new Date().getMinutes());
                                                return (
                                                    <div onClick={() => handleClick(cinema.name, time.time)} style={
                                                        amOrPm === "AM" || (showTime === currentTime ? showMinutes > new Date().getMinutes() ? true : false : (showTime > currentTime && showTime !== 12)) || (date > new Date().getDate()) ? { pointerEvents: "all" } :
                                                            { pointerEvents: "none", color: "rgb(192,192,192)" }} key={index + 1} className={styles.button}>
                                                        {time.time}
                                                        <div className={styles.price__container}>
                                                            <div>
                                                                <p>Rs. 150</p>
                                                                <span>NORMAL</span> <br />
                                                                <span style={{ color: "#4abd5d" }}>Available</span>
                                                            </div>
                                                            <div>
                                                                <p>Rs. 200</p>
                                                                <span>CLASSIC</span> <br />
                                                                <span style={{ color: "#4abd5d" }}>Available</span>
                                                            </div>
                                                            <div>
                                                                <p>Rs. 300</p>
                                                                <span>VIP</span> <br />
                                                                <span style={{ color: "#4abd5d" }}>Available</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    {
                                        cinema.cancellation_availability && <div style={{ display: "flex", alignItems: "center" }} >
                                            <BsCircleFill style={{ color: "#FFC610", fontSize: 8, marginRight: 5 }} /> <span style={{ fontSize: 12, color: "gray" }}>Cancellation Available</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}