import React from 'react'
import styles from "../Styling/Food.module.css";


const FoodCard = ({ food_image = "https://in.bmscdn.com/bmsin/v2/Web-v2/d-combo/2000131_22112019112957.jpg",
food_name="Title", food_tag="des", food_price="59", _id, handleCount, count}) => {
    return (
        <div className={styles.card}>

            <div className={styles.price}>
                <i class="fas fa-rupee-sign"></i>
                <div>{food_price}</div>
            </div>

            <img src={food_image} alt="" />
            
            <div className={styles.details}>
                <div className={styles.title}>
                    <div>{ food_name }</div>
                    <div>{ food_tag }</div>
                </div>

                <div className={styles.btn}>
                    <div>
                        <div className={styles.veg}>
                            <i class="fas fa-circle"></i>
                        </div>
                    </div>
                    <div>
                        {count === 0 ? <span onClick={() => handleCount(_id, +1)}>ADD</span> :
                            <div className={styles.counter}>
                                <div onClick={() => handleCount(_id, -1)}>
                                <i class="fas fa-minus-circle"></i>
                                </div>
                                <div>{ count }</div>
                                <div onClick={()=>handleCount(_id, +1)}><i class="fas fa-plus-circle"></i></div>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
