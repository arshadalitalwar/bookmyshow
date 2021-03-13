import React from 'react'
import styles from "../Styling/PaymentsPage.module.css";

const FirstSection = ({ handlePayment }) => {
    
    
    return (
        <div>
            <div className={styles.contact}>
                <div>
                    <span>Share your contact details</span>
                </div>
                <div className={styles.contact_details}>
                    <input type="email" placeholder="Email Address"/>
                    <input type="text" placeholder="Nobile number" />
                    <button style={{marginBottom:'-5px', color:'white'}}>continue</button>
                </div>
                
               
            </div>
            <div className={styles.contact}>
                <div>More Payment options</div>
                <div className={styles.StoredCard}>
                    <div className={styles.sidebar}>
                        <div>Quick pay</div>
                        <div style={{background:'white'}}>Credit / Debit card</div>
                        <div>Net Banking</div>
                        <div>Mobile wallet</div>
                        <div>Gift Voucher</div>
                        <div>UPI</div>
                        <div>Redeem Points</div>
                        <div>Credit Voucher</div>
                    </div>
                    <div  className={styles.cardDetails}>
                        <span>Enter your card details</span>
                        <div className={styles.sampleCard}>
                            <div style={{fontSize:'13px', color:'gray'}}>Card Number</div>
                            <input type="text" placeholder="Enter Your Card Number" value="4568 6749 7864 6543"/>
                            <input type="text" placeholder="Name on the card" value="Veer Bahadur Shastri" />
                            
                            <div className={styles.otherDetails}>
                            <div>
                                <div style={{fontSize:'13px', color:'gray'}}>Expiry</div>
                                <div style={{display:'flex'}}>
                                    <input type="text" placeholder="MM" value="06"/>
                                    <input type="text" placeholder="YY" value="23"/>
                                </div>
                            </div>

                            <div>
                                <div style={{fontSize:'13px', color:'gray'}}>CVV</div>
                                <div>
                                    < input style={{width:"50px"}} type="text" placeholder="CVV"  value="933"/>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className={styles.payment}>
                            <button onClick={handlePayment}>Make Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection


















// ```
// npm install redux react-redux redux-thunk axios react-router-dom material-ui/@core @material-ui/icons @material-ui/lab antd react-multi-carousel
// ```