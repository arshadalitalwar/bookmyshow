import React from 'react'
import styles from '../Components/Styling/SeeAll.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from "../Redux/app/actions"
import Card from '../Components/Card_seeAll'

const SeeAll = () => {
    const [language, SetLanguage] = React.useState(false);
    const [genre, SetGenre] = React.useState(false);
    const [formate, SetFormate] = React.useState(false);
    const [filterLanguage, setFilterLanguage] = React.useState([]);
    const [filterGenre, setFilterGenre] = React.useState([]);
    const [filterFormate, setFilterFormate] = React.useState([]);
    const [movie, setMovie] = React.useState([]);

    React.useEffect(() => {
        dispatch(getMovies())
    }, [])

    const movies_data = useSelector(state => state.app.movies_data)
    const city = useSelector(state => state.app.city)

    const dispatch = useDispatch();

    React.useEffect(() => {
        setMovie(movies_data)
    }, [movies_data])

    const filterMovies = () => {
        console.log(filterGenre.length)
        if (filterLanguage.length > 0) {
            const updated = movie.filter(item => (item.languages).includes(filterLanguage[filterLanguage.length - 1]))
            setMovie(updated)
        }
        if (filterGenre.length > 0) {
            const updated = movie.filter(item => item.movie_genre?.find(gen=>(gen.genre === filterGenre[filterGenre.length - 1]) ? gen.genre : genre).genre === filterGenre[filterGenre.length - 1])
            setMovie(updated)
            console.log(updated)
        }
        if (filterFormate.length > 0) {
            const updated = movie.filter(item => item.screen_type?.find(formate=>(formate.type === filterFormate[filterFormate.length - 1])?formate.type:formate.type).type === filterFormate[filterFormate.length - 1])
            setMovie(updated)
        }
        if (filterLanguage.length === 0 && filterGenre.length === 0 && filterFormate.length === 0) {
            setMovie(movies_data)
        }
        console.log(movie)
    }

    React.useEffect(() => {
        if (filterLanguage.length === 0 && filterGenre.length === 0 && filterFormate.length === 0) {
            setMovie(movies_data)
        }
    }, [movie])
    const handleClear = (text) => {
        if (text === "languages") {
            setFilterLanguage([]);
        } else if (text === "genre") {
            setFilterGenre([]);
        } else {
            setFilterFormate([]);
        }
        filterMovies()
    }

    const handleFilter = (language, genre, formate) => {
        if (language !== "") {
            setFilterLanguage([...filterLanguage, language])
        }else if (genre !== "") {
            setFilterGenre([...filterGenre, genre])
        } else {
            setFilterFormate([...filterFormate, formate])
        }
        filterMovies()
    }
    
    console.log(movie)
    return (
        <div className={styles.container}>
            <div className={styles.leftsideNav}>
                <h2 style={{background:'none', fontSize:'25px', fontWeight:'700'}}>Filters</h2>
                <div>
                    <div className={styles.header}>
                        <div onClick={()=>SetLanguage(!language)}>
                            {!language && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {language && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{marginLeft:'10px', color:`${!language? 'black':'#e67088'}`}}>Languages</span>
                        </div>
                        <div onClick={()=>handleClear("languages")}>Clear</div>
                    </div>
                    <div className={styles.dialogue} style={language?{display:'flex'}:{display:'none'}}>
                        <button onClick={()=>handleFilter("Hindi", "", "")}>Hindi</button>
                        <button onClick={()=>handleFilter("English", "", "")}>English</button>
                        <button onClick={()=>handleFilter("Telugu", "", "")}>Telugu</button>
                        <button onClick={()=>handleFilter("Kannada", "", "")}>Kannada</button>
                        <button onClick={()=>handleFilter("Japaniese", "", "")}>Japaniese</button>
                        <button onClick={()=>handleFilter("Mulyalam", "", "")}>Mulyalam</button>
                        <button onClick={()=>handleFilter("Punjabi", "", "")}>Punjabi</button>
                    </div>
                </div>

                <div>
                    <div  className={styles.header}>
                        <div onClick={()=>SetGenre(!genre)}>
                            {!genre && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {genre && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{marginLeft:'10px', color:`${!genre? 'black':'#e67088'}`}}>Genre</span>
                        </div>
                        <div onClick={()=>handleClear("genre")}>Clear</div>
                    </div>
                    <div className={styles.dialogue} style={genre?{display:'flex'}:{display:'none'}}>
                        <button onClick={()=>handleFilter("", "Action", "")}>Action</button>
                        <button onClick={()=>handleFilter("", "Drama", "")}>Drama</button>
                        <button onClick={()=>handleFilter("", "Triller", "")}>Thriller</button>
                        <button onClick={()=>handleFilter("", "Comedy", "")}>Comedy</button>
                        <button onClick={()=>handleFilter("", "Adventure", "")}>Adventure</button>
                        <button onClick={()=>handleFilter("", "Action", "")}>Action</button>
                        <button onClick={()=>handleFilter("", "Family", "")}>Family</button>
                        <button onClick={()=>handleFilter("", "Fantasy", "")}>Fantasy</button>
                        <button onClick={()=>handleFilter("", "Horror", "")}>Horror</button>
                        <button onClick={()=>handleFilter("", "Annimie", "")}>Annimie</button>
                        <button onClick={()=>handleFilter("", "Biography", "")}>Biography</button>
                        <button onClick={()=>handleFilter("", "Sci-fi", "")}>Sci-Fi</button>
                        <button onClick={()=>handleFilter("", "Social", "")}>Social</button>
                        <button onClick={()=>handleFilter("", "Sport", "")}>Sports</button>
                    </div>
                </div>

                <div>
                    <div className={styles.header}>
                        <div onClick={()=>SetFormate(!formate)}>
                            {!formate && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {formate && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{marginLeft:'10px', color:`${!formate? 'black':'#e67088'}`}}>Formate</span>
                        </div>
                        <div onClick={()=>handleClear("formate")}>Clear</div>
                    </div>
                    <div className={styles.dialogue} style={formate?{display:'flex'}:{display:'none'}}>
                        <button onClick={()=>handleFilter("", "", "2D")}>2D</button>
                        <button onClick={()=>handleFilter("", "", "4D")}>4D</button>
                        <button onClick={()=>handleFilter("", "", "4DX")}>4DX</button>
                        <button onClick={()=>handleFilter("", "", "IMAX 2D")}>IMAX 2D</button>
                        <button onClick={()=>handleFilter("", "", "IMAX 3D")}>IMAX 3D</button>
                    </div>
                </div>
            </div>

            <div>
                <h2 style={{ background: 'none', fontSize: '25px', fontWeight: '700', marginLeft: '30px' }}>Movies in {city}</h2>
                <div className={styles.appliedFilter}>
                    {[...filterLanguage, ...filterGenre, ...filterFormate].map(item => (
                        <div>{ item }</div>
                    ))}
                </div>
                <div className={styles.explore}>
                    <div>Comming Soon</div>
                    <div style={{color:'#e67088', fontSize:'18px'}}>{"Explore Upcomming movies >"}</div>
                </div>
                <div className={styles.mainCards}>
                    {(movie.length === 0) ? <div style={{ margin:'20px'}}>
                        <h2>Oops, We are not able to find the specific movie.</h2>
                        <img src="empty-preview.png" alt="empty"/>
                    </div> :
                    movie?.map(item =>
                    <Card {...item} />
                )}
                </div>
            </div>
        </div>
    )
}

export default SeeAll
