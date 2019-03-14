import React from "react";
import styles from "./IconPreview.module.scss";
import Icon from "../Icon/Icon";

const IconPreview = ({ iconInfo, toggleIconSelect, toggleFlip }) => {
  const { user, comp } = iconInfo;
  return (
    <div className={styles.iconPreviewWrapper}>
      <button onClick={toggleIconSelect} className={styles.icon}>
        <Icon icon={user.icon} colour={user.colour} />
      </button>
      <span className={styles.highlight}>VS</span>
      <button
        onClick={() => {
          toggleIconSelect();
          toggleFlip();
        }}
        className={styles.icon}
      >
        <Icon icon={comp.icon} colour={comp.colour} />
      </button>
    </div>
  );
};

export default IconPreview;
