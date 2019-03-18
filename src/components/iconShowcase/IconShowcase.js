import React from "react";
import styles from "./IconShowcase.module.scss";
import Icon from "../Icon/Icon";

const IconShowcase = ({
  oppositionIconType,
  changeIconSetting,
  player,
  flipped
}) => {
  const userBackface = flipped && player === "user";
  const compBackface = !flipped && player === "comp";
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="circle"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="smiley"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="wheel"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
        colour="orange"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="button"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
        colour="lightBlue"
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="cross"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="swords"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="candyCane"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        changeIconSetting={changeIconSetting}
        icon="pencils"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
    </div>
  );
};

const IconShowcaseBtn = ({
  icon,
  iconType,
  colour,
  changeIconSetting,
  disabled,
  tabIndex
}) => {
  const className = !disabled
    ? styles.iconShowcaseBtn
    : styles.iconShowcaseBtnDisabled;
  return (
    <button
      aria-label={icon}
      className={className}
      onClick={() => changeIconSetting(icon, iconType)}
      disabled={disabled}
      tabIndex={tabIndex}
    >
      <Icon icon={icon} colour={colour} bgColour={"#fff"} />
    </button>
  );
};

export default IconShowcase;
