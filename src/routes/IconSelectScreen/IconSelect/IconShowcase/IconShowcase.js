import React from "react";
import styles from "./IconShowcase.module.scss";
import IconButton from "../../../../components/IconButton/IconButton";

const IconShowcase = ({
  oppositionIconType,
  updateIconInfo,
  player,
  flipped
}) => {
  const isPlayer1 = player === "user";
  const isPlayer2 = player === "comp";
  const isUserBackface = flipped && isPlayer1;
  const isCompBackface = !flipped && isPlayer2;
  return (
    <div className={styles.iconShowcase}>
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="circle"
        iconType="nought"
        colour="green"
        disabled={oppositionIconType === "nought" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="smiley"
        colour="yellow"
        iconType="nought"
        disabled={oppositionIconType === "nought" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="wheel"
        iconType="nought"
        disabled={oppositionIconType === "nought" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
        colour="orange"
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="button"
        iconType="nought"
        disabled={oppositionIconType === "nought" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
        colour="lightBlue"
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="cross"
        colour="red"
        iconType="cross"
        disabled={oppositionIconType === "cross" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="swords"
        colour="brown"
        iconType="cross"
        disabled={oppositionIconType === "cross" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="candyCane"
        colour="red"
        iconType="cross"
        disabled={oppositionIconType === "cross" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
      />
      <IconShowcaseBtn
        updateIconInfo={updateIconInfo}
        icon="pencils"
        iconType="cross"
        colour="gold"
        disabled={oppositionIconType === "cross" && isPlayer2}
        tabIndex={!isUserBackface && !isCompBackface ? "0" : "-1"}
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
    <IconButton
      className={className}
      onClick={() => updateIconInfo(icon, iconType)}
      disabled={disabled}
      icon={icon}
      colour={colour}
    />
  );
};

export default IconShowcase;
