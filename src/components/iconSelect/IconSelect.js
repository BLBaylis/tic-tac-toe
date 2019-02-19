import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../iconEditor/IconEditor";
import IconShowcase from "../iconShowcase/IconShowcase";

const IconSelect = ({
  player,
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
          changeIconSetting={newColour =>
            changeIconSetting(player, { colour: newColour })
          }
          iconInfo={iconInfo[player]}
        />
        <IconShowcase
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
          toggleFlip={toggleFlip}
          toggleIconSelect={toggleIconSelect}
        />
      </div>
    </div>
  );
};

const IconSelectNav = ({ player, toggleFlip, toggleIconSelect }) => {
  const compOnClick = () => {
    toggleIconSelect();
    toggleFlip();
  };
  return (
    <div className={styles.buttonRow}>
      {player === "comp" && (
        <button onClick={toggleFlip} className={styles.backButton}>
          BACK
        </button>
      )}
      <button
        className={styles[`${player}ConfirmButton`]}
        onClick={player === "user" ? toggleFlip : compOnClick}
      >
        {`CONFIRM ${player.toUpperCase()} ICON`}
      </button>
    </div>
  );
};

export default IconSelect;
