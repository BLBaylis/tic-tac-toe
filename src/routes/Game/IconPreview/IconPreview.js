import React from "react";
import IconButton from "../../../components/IconButton/IconButton";

import styles from "./IconPreview.module.scss";

const IconPreview = ({ iconInfo, changeRoute, toggleIconSelectFlipped }) => {
  const { userIcon, userIconColour, compIcon, compIconColour } = iconInfo;
  return (
    <div className={styles.iconPreviewWrapper}>
      <IconButton
        onClick={changeRoute}
        className={styles.icon}
        icon={userIcon}
        colour={userIconColour}
      />
      <span className={styles.highlight}>VS</span>
      <IconButton
        onClick={() => {
          changeRoute("iconSelect");
          toggleIconSelectFlipped();
        }}
        className={styles.icon}
        icon={compIcon}
        colour={compIconColour}
      />
    </div>
  );
};

export default IconPreview;
