import React from "react";
import styles from "./IconEditor.module.scss";
import Palette from "../palette/Palette";
import Icon from "../icon/Icon";

const IconEditor = ({changeSetting, iconInfo}) => {
  const {icon, colour} = iconInfo;
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner}>
          <Icon icon={icon} colour={colour} />
        </div>
      </div>
      <Palette changeSetting={changeSetting} />
    </div>
  );
};
export default IconEditor;
