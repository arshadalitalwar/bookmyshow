import React from 'react'
import styles from '../Components/Styling/SeeAll.module.css'

const SeeAll = () => {
    const [language, SetLanguage] = React.useState(false);
    const [genre, SetGenre] = React.useState(false);
    const [formate, SetFormate] = React.useState(false);


    return (
        <div className={styles.container}>
            <div className={styles.leftsideNav}>
                <div>
                    <div className={styles.header}>
                        <div onClick={()=>SetLanguage(!language)}>
                            {!language && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {language && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{marginLeft:'10px', color:`${!language? 'black':'#e67088'}`}}>Languages</span>
                        </div>
                        <div>Clear</div>
                    </div>
                    <div className={styles.dialogue} style={language?{display:'flex'}:{display:'none'}}>
                        <button>Hindi</button>
                        <button>English</button>
                        <button>Telugu</button>
                        <button>Kannada</button>
                        <button>Japaniese</button>
                        <button>Multalam</button>
                        <button>Punjabi</button>
                    </div>
                </div>

                <div>
                    <div  className={styles.header}>
                        <div onClick={()=>SetGenre(!genre)}>
                            {!genre && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {genre && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{marginLeft:'10px', color:`${!genre? 'black':'#e67088'}`}}>Genre</span>
                        </div>
                        <div>Clear</div>
                    </div>
                    <div className={styles.dialogue} style={genre?{display:'flex'}:{display:'none'}}>
                        <button>Action</button>
                        <button>Drama</button>
                        <button>Thriller</button>
                        <button>Comedy</button>
                        <button>Adventure</button>
                        <button>Action</button>
                        <button>Family</button>
                        <button>Fantecy</button>
                        <button>Horror</button>
                        <button>Annimie</button>
                        <button>Biography</button>
                        <button>Sci-Fi</button>
                        <button>Social</button>
                        <button>Sports</button>
                    </div>
                </div>

                <div>
                    <div className={styles.header}>
                        <div onClick={()=>SetFormate(!formate)}>
                            {!formate && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {formate && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{marginLeft:'10px', color:`${!formate? 'black':'#e67088'}`}}>Formate</span>
                        </div>
                        <div>Clear</div>
                    </div>
                    <div className={styles.dialogue} style={formate?{display:'flex'}:{display:'none'}}>
                        <button>2D</button>
                        <button>4D</button>
                        <button>4DX</button>
                        <button>IMAX 2D</button>
                        <button>IMAX 3D</button>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default SeeAll
