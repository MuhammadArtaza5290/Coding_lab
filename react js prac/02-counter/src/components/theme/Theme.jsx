import { useState } from "react";
import './Theme.css'
function Theme(){
    let[theme, setTheme] = useState('light')

    let ToggleBtn =()=>{
        setTheme(theme === 'light'? 'dark' : 'light');
    }
    return(
        <>
        <div className={theme}>
            <h1>Welcome to Theme Toggle App</h1>
            <button onClick={ToggleBtn}>
                Switch to {theme === 'light'? 'Dark': 'Light'}
            </button>
        </div>
        </>
    )
}

export default Theme;