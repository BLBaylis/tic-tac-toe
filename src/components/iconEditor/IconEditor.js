import React from "react";
import styles from "./IconEditor.module.scss";
//import Palette from "../palette/Palette";
import Icon from "../icon/Icon";
import paintbrush from "../../paintbrush.svg";

const IconEditor = ({ changeSetting, iconInfo }) => {
  const { icon, colour } = iconInfo;
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner}>
          <Icon icon={icon} colour={colour} />
        </div>
      </div>
      {/*<Palette changeSetting={changeSetting} />*/}
      <div className={styles.palette}>
        <input type="color" />
        <i className={styles.paintIcon}>
          <img className={styles.paintImg} src={paintbrush} />
        </i>
      </div>
    </div>
  );
};
export default IconEditor;
