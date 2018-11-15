import React from 'react';
import styles from './Settings.module.scss'

const Settings = (props) => {
    return (
        <div className = {styles.settings}>
            <h2>SETTINGS</h2>
            <p>Who goes first?</p>
            <button onClick = {() => props.onClick("firstMove", "user")}>ME</button>
            <button onClick = {() => props.onClick("firstMove", "computer")}>COMPUTER</button>
            <p>Grid Size</p>
            <button onClick = {() => props.onClick("gridSize", 3)}>3 x 3<br/>(recommended)</button>
            <button onClick = {() => props.onClick("gridSize", 5)}>5 x 5</button>
            <button onClick = {() => props.onClick("gridSize", 7)}>7 x 7</button>
        </div>
    )
}

export default Settings;