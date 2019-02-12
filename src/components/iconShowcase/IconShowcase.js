import React from "react";
import styles from "./IconShowcase.module.scss";
import Icon from "../icon/Icon";

const IconShowcase = ({ changeIconSetting }) => {
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="circle"
        colour="lightGreen"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="smiley"
        colour="yellow"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="wheel"
        colour="black"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="button"
        colour="black"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="cross"
        colour="lightRed"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="swords"
        colour="brown"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="candyCane"
        colour="red"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="pencils"
        colour="gold"
      />
    </div>
  );
};

const IconShowcaseBtn = ({ icon, colour, changeIconSetting }) => {
  return (
    <button
      className={styles.iconShowcaseBtn}
      onClick={() => changeIconSetting(icon)}
    >
      <Icon icon={icon} colour={colour} />
    </button>
  );
};

export default IconShowcase;
