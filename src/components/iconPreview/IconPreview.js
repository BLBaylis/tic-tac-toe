import React from 'react';
import styles from './IconPreview.module.scss'
import IconGenerator from "../iconGenerator/IconGenerator";

const IconPreview = props => {
    return (
        <React.Fragment>
            <button onClick={props.toggleIconSelect} className={styles.icon}>
                <IconGenerator iconInfo = {props.iconInfo.user}/> 
            </button>
            <span className = {styles.highlight}>VS</span>
            <button onClick={props.toggleIconSelect} className={styles.icon}>
                <IconGenerator iconInfo = {props.iconInfo.comp}/> 
            </button>
        </React.Fragment>
    )
}

export default IconPreview