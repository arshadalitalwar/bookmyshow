import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFood, storeSelectedFood } from '../../Redux/food/actions';
import styles from "../Styling/Food.module.css";
import FoodCard from './FoodCard';


const init = {
    all: true,
    combo: false,
    snacks: false,
    beverages: false,
    popcorn: false,
}
const Food = () => {
    const dispatch = useDispatch()
    const [filteredFood, setFliteredFood] = React.useState([])
    const foods = useSelector(state => state.food.foods)
    const [active, setActive] = React.useState(init)
    const [selectedFood, setSelectedFood]= React.useState([])

    React.useEffect(() => {
        dispatch(getFood())
        setFliteredFood(foods)
        handleFilter("All")
    }, [])

    React.useEffect(() => {
        setFliteredFood(foods)
    }, [foods])

    const handleFilter = (text) => {
        if (text === "CO") {
            const updated = foods.filter(item => item.is_combo === true)
            setFliteredFood(updated)
            setActive({...active, combo: true, all:false, snacks:false, beverages:false, popcorn:false})
        }else if (text === "SN") {
            const updated = foods.filter(item => item.is_coke === true)
            setFliteredFood(updated)
            setActive({...active, combo: false, all:false, snacks:true, beverages:false, popcorn:false})
        }else if (text === "BE") {
            const updated = foods.filter(item => item.is_combo === true)
            setFliteredFood(updated)
            setActive({...active, combo: false, all:false, snacks:false, beverages:true, popcorn:false})
        }
        else if (text === "PO") {
            const updated = foods.filter(item => item.is_popcorn === true)
            setFliteredFood(updated)
            setActive({...active, combo: false, all:false, snacks:false, beverages:false, popcorn:true})
        } else {
            setFliteredFood(foods)
            setActive({...active, combo: false, all:true, snacks:false, beverages:false, popcorn:false})
        }
    }

    const handleCount = (id, val) => {
        if (selectedFood.length < 5) {
            let selected = filteredFood.map(item => item._id === id?{...item, count: item.count + val}: item)
            setFliteredFood(selected)
        } else {
            alert("Only 5 items per user")
        }
    }

    React.useEffect(() => {
        const temp = filteredFood.filter(item => item.count > 0)
        setSelectedFood(temp)
        dispatch(storeSelectedFood(temp))
    }, [filteredFood])

    React.useEffect(() => {
        dispatch(storeSelectedFood(selectedFood))
    }, [selectedFood])
    
    console.log(selectedFood)
    
    return (
        <div className={styles.container}>
            <img src="https://in.bmscdn.com/bmsin/fnb/offerbanner/web/web-offerbanner.jpg" alt="banner"/>
            <div className={styles.wrapper}>
                <div>Grab a <a href="">bite!</a></div>
                <span className={styles.span}>Prebook Your Meal and<span> Save More!</span></span>
                <div className={styles.filters}>
                    <span style={active.all ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('ALL')}>ALL</span>
                    <span style={active.combo ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('CO')}>COMBOS</span>
                    <span style={active.snacks ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('SN')}>SNACKS</span>
                    <span style={active.beverages ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={()=>handleFilter('BE')}>BEVERAGES</span>
                    <span style={active.popcorn ?{color:'white', background:'#F84464', border:'none'}: {}} onClick={() =>handleFilter('PO')}>POPCORN</span>
                </div>
                <div className={styles.cards}>
                    {filteredFood?.map(item => (
                        <FoodCard {...item} handleCount={handleCount}
                        // handleCounter={handleCounter}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Food
