import React from "react";
import styles from "./IconShowcase.module.scss";
import Icon from "../Icon/Icon";

const IconShowcase = ({
  oppositionIconType,
  updateIconInfo,
  player,
  flipped
}) => {
  const userBackface = flipped && player === "user";
  const compBackface = !flipped && player === "comp";
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="circle"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="smiley"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="wheel"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
        colour="orange"
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="button"
        iconType="nought"
        disabled={oppositionIconType === "nought" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
        colour="lightBlue"
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="cross"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="swords"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="candyCane"
        iconType="cross"
        disabled={oppositionIconType === "cross" && player === "comp"}
        tabIndex={!userBackface && !compBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
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
  updateIconInfo,
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
      onClick={() => updateIconInfo(icon, iconType)}
      disabled={disabled}
      tabIndex={tabIndex}
    >
      <Icon icon={icon} colour={colour} bgColour={"#fff"} />
    </button>
  );
};

export default IconShowcase;
