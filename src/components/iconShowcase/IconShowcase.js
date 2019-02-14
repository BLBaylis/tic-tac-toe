import React from "react";
import styles from "./IconShowcase.module.scss";
import Icon from "../icon/Icon";

const IconShowcase = ({ changeIconSetting }) => {
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn changeIconSetting={changeIconSetting} icon="circle" />
      <IconShowcaseBtn changeIconSetting={changeIconSetting} icon="smiley" />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="wheel"
        colour="orange"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="button"
        colour="lightBlue"
      />
      <IconShowcaseBtn changeIconSetting={changeIconSetting} icon="cross" />
      <IconShowcaseBtn changeIconSetting={changeIconSetting} icon="swords" />
      <IconShowcaseBtn changeIconSetting={changeIconSetting} icon="candyCane" />
      <IconShowcaseBtn changeIconSetting={changeIconSetting} icon="pencils" />
    </div>
  );
};

const IconShowcaseBtn = ({ icon, colour, changeIconSetting }) => {
  return (
    <button
      className={styles.iconShowcaseBtn}
      onClick={() => changeIconSetting(icon)}
    >
      <Icon icon={icon} colour={colour} bgColour={"#fff"} />
    </button>
  );
};

export default IconShowcase;
