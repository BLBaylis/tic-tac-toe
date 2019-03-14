import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../IconEditor/IconEditor";
import IconShowcase from "../IconShowcase/IconShowcase";
import arrow from "./arrow.svg";

const IconSelect = ({
  player,
  flipped,
  iconInfo,
  changeIconSetting,
  toggleFlip,
  toggleIconSelect
}) => {
  const otherPlayer = player === "user" ? "comp" : "user";
  return (
    <div className={styles.iconSelectWrapper}>
      <div className={styles.iconSelect}>
        <h2 className={styles.heading}>
          SELECT&nbsp;
          <span className={styles.highlight}>{player.toUpperCase()}</span>
          &nbsp;ICON
        </h2>
        <IconEditor
          player = {player}
          flipped={flipped}
          changeIconSetting={newColour =>
            changeIconSetting(player, { colour: newColour })
          }
          iconInfo={iconInfo[player]}
        />
        <IconShowcase
          player={player}
          flipped = {flipped}
          oppositionIconType={iconInfo[otherPlayer].iconType}
          changeIconSetting={(newIcon, newIconType) =>
            changeIconSetting(player, {
              icon: newIcon,
              iconType: newIconType
            })
          }
        />
        <IconSelectNav
          player={player}
          iconInfo={iconInfo}
          toggleFlip={toggleFlip}
          toggleIconSelect={toggleIconSelect}
        />
      </div>
    </div>
  );
};

const IconSelectNav = ({ player, toggleFlip, toggleIconSelect, iconInfo }) => {
  const compOnClick = () => {
    toggleIconSelect();
    toggleFlip();
  };
  return (
    <div className={styles.buttonRow}>
      {player === "comp" && (
        <button onClick={toggleFlip} className={styles.backButton}>
          <img className = {styles.arrow} src={arrow} alt ="back arrow"/>
        </button>
      )}
      <button
        disabled={player === "comp" && !iconInfo.comp.icon}
        className={styles[`${player}ConfirmButton`]}
        onClick={player === "user" ? toggleFlip : compOnClick}
      >
        {`CONFIRM ${player.toUpperCase()} ICON`}
      </button>
    </div>
  );
};

export default IconSelect;
