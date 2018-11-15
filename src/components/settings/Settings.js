import React from 'react';
import styles from './Settings.module.scss'

const Settings = (props) => {
    return (
        <div className = {styles.settings}>
            <h2>SETTINGS</h2>
            <p>Who goes first?</p>
            <button>ME</button>
            <button>COMPUTER</button>
            <p>Grid Size</p>
            <button>3 x 3</button>
            <button>5 x 5</button>
            <button>7 x 7</button>
        </div>
    )
}

export default Settings;