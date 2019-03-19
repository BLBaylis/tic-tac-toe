import React from "react";
import styles from "./IconPreview.module.scss";
import Icon from "../Icon/Icon";

const IconPreview = ({ iconInfo, toggleIconSelectOpen, toggleIconSelectFlipped }) => {
  const { userIcon, userColour, compIcon, compIconColour } = iconInfo;
  return (
    <div className={styles.iconPreviewWrapper}>
      <button onClick={toggleIconSelectOpen} className={styles.icon}>
        <Icon icon={userIcon} colour={userColour} />
      </button>
      <span className={styles.highlight}>VS</span>
      <button
        onClick={() => {
          toggleIconSelectOpen();
          toggleIconSelectFlipped();
        }}
        className={styles.icon}
      >
        <Icon icon={compIcon} colour={compIconColour} />
      </button>
    </div>
  );
};

export default IconPreview;
