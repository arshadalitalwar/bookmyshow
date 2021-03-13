import React from "react";
import { useSelector } from "react-redux";
import { Ticket } from "./Ticket";
import styles from "./Styling/Ticket.module.css";

export const BookingHistory = () => {
    const booking_data = useSelector(state => state.after_payment.booking_data).reverse();
    // console.log(booking_data)
    // console.log("History")
    booking_data.sort((a, b) => {
        if (a.date === b.date) {
            const aShowTime = a.time.split(":").map(Number).shift();
            const bShowTime = b.time.split(":").map(Number).shift();
            if (aShowTime > bShowTime) {
                return 1
            }
            return -1
        }
        return a.date - b.date;
    })


    const previous_booking = booking_data?.filter(item => (
        item.date < new Date().getDate()
    ))
    return (
        <div className={styles.container} >
            <div>
                <h1>BOOKING DETAILS</h1>
                <div className={styles.ticket__container}>
                    {
                        booking_data?.map(item => {
                            console.log(item.date)

                            return item.date >= new Date().getDate() && <Ticket key={item._id} {...item} />
                        })
                    }
                </div>
            </div>
            { previous_booking.length > 0 && <div>
                <h1>Previous Bookings</h1>
                <div className={styles.ticket__container}>
                    {
                        previous_booking?.map(item => {
                            // console.log(item.date)

                            return <Ticket key={item._id} {...item} />
                        })
                    }
                </div>
            </div>}
        </div>
    )
}