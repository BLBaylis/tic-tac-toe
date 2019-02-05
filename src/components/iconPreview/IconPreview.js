import React from "react";
import styles from "./IconPreview.module.scss";
import Icon from "../icon/Icon";

const IconPreview = ({iconInfo, toggleIconSelect}) => {
  const {user, comp} = iconInfo;
  return (
    <React.Fragment>
      <button onClick={toggleIconSelect} className={styles.icon}>
        <Icon icon={user.icon} colour={user.colour} />
      </button>
      <span className={styles.highlight}>VS</span>
      <button onClick={toggleIconSelect} className={styles.icon}>
        <Icon icon={comp.icon} colour={comp.colour} />
      </button>
    </React.Fragment>
  );
};

export default IconPreview;
