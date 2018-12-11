import React from "react";
import styles from "./IconShowcase.module.scss";
import IconGenerator from '../iconGenerator/IconGenerator'

const IconShowcase = props => {
  return (
    <div className={styles.iconShowcase}>
      <Icon changeSetting = {props.changeSetting} icon = "circle" colour = "lightGreen"/>
      <Icon changeSetting = {props.changeSetting} icon = "smiley" colour = "yellow"/>
      <Icon changeSetting = {props.changeSetting} icon = "wheel" colour = "black"/>
      <Icon changeSetting = {props.changeSetting} icon = "button" colour = "black"/>
      <Icon changeSetting = {props.changeSetting} icon = "cross" colour = "lightRed"/>
      <Icon changeSetting = {props.changeSetting} icon = "swords" colour = "brown"/>
      <Icon changeSetting = {props.changeSetting} icon = "candyCane" colour = "red"/>
      <Icon changeSetting = {props.changeSetting} icon = "pencils" colour = "gold"/>
    </div>
  );
};

const Icon = props => {
  return (
    <button onClick = {() => props.changeSetting(props.icon)} className={styles.icon}>
      <div className={styles.iconInner}>
        {<IconGenerator iconInfo = {{icon: props.icon, colour: props.colour}}/>}
      </div>
    </button>
  )
}

export default IconShowcase;
