import React from "react";
import styles from "./IconShowcase.module.scss";
import Icon from "../icon/Icon";

const IconShowcase = ({ oppositionIconType, changeIconSetting }) => {
  console.log(oppositionIconType);
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="circle"
        iconType="nought"
        disabled={oppositionIconType === "nought"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="smiley"
        iconType="nought"
        disabled={oppositionIconType === "nought"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="wheel"
        iconType="nought"
        disabled={oppositionIconType === "nought"}
        colour="orange"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="button"
        iconType="nought"
        disabled={oppositionIconType === "nought"}
        colour="lightBlue"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="cross"
        iconType="cross"
        disabled={oppositionIconType === "cross"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="swords"
        iconType="cross"
        disabled={oppositionIconType === "cross"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="candyCane"
        iconType="cross"
        disabled={oppositionIconType === "cross"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="pencils"
        iconType="cross"
        disabled={oppositionIconType === "cross"}
      />
    </div>
  );
};

const IconShowcaseBtn = ({
  icon,
  iconType,
  colour,
  changeIconSetting,
  disabled
}) => {
  const className = !disabled
    ? styles.iconShowcaseBtn
    : styles.iconShowcaseBtnDisabled;
  return (
    <button
      className={className}
      onClick={() => changeIconSetting(icon, iconType)}
      disabled={disabled}
    >
      <Icon icon={icon} colour={colour} bgColour={"#fff"} />
    </button>
  );
};

export default IconShowcase;
