import React from "react";
import styles from "./IconShowcase.module.scss";
import Icon from "../icon/Icon";

const IconShowcase = ({changeSetting}) => {
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn
        changeSetting={changeSetting}
        icon="circle"
        colour="lightGreen"
      />
      <IconShowcaseBtn changeSetting={changeSetting} icon="smiley" colour="yellow" />
      <IconShowcaseBtn changeSetting={changeSetting} icon="wheel" colour="black" />
      <IconShowcaseBtn changeSetting={changeSetting} icon="button" colour="black" />
      <IconShowcaseBtn
        changeSetting={changeSetting}
        icon="cross"
        colour="lightRed"
      />
      <IconShowcaseBtn changeSetting={changeSetting} icon="swords" colour="brown" />
      <IconShowcaseBtn changeSetting={changeSetting} icon="candyCane" colour="red" />
      <IconShowcaseBtn changeSetting={changeSetting} icon="pencils" colour="gold" />
    </div>
  );
};

const IconShowcaseBtn = ({icon, colour, changeSetting}) => {
  return (
    <button className = {styles.iconShowcaseBtn} onClick={() => changeSetting(icon)}>
      <Icon icon = {icon} colour = {colour} />
    </button>
  )
}

export default IconShowcase;
