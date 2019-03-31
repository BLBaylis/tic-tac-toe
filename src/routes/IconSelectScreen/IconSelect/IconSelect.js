import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "./IconEditor/IconEditor";
import IconShowcase from "./IconShowcase/IconShowcase";
import arrow from "./arrow.svg";

const IconSelect = ({ player, iconInfo, iconSelectFlipped, iconSelectFuncs }) => {
  const { updateIconInfo } = iconSelectFuncs;
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
          player={player}
          flipped={iconSelectFlipped}
          updateIconInfo={newColour =>
            updateIconInfo(player, { iconColour: newColour })
          }
          iconInfo={iconInfo}
        />
        <IconShowcase
          player={player}
          flipped={iconSelectFlipped}
          oppositionIconType={iconInfo[`${otherPlayer}IconType`]}
          updateIconInfo={(newIcon, newIconType) =>
            updateIconInfo(player, {
              icon: newIcon,
              iconType: newIconType
            })
          }
        />
        <IconSelectNav
          player={player}
          iconInfo={iconInfo}
          iconSelectFuncs = {iconSelectFuncs}
        />
      </div>
    </div>
  );
};

const IconSelectNav = ({ player, iconInfo, iconSelectFuncs }) => {
  const { changeRoute, toggleIconSelectFlipped } = iconSelectFuncs;
  const compOnClick = () => {
    changeRoute();
    toggleIconSelectFlipped();
  };
  return (
    <div className={styles.buttonRow}>
      {player === "comp" && (
        <button onClick={changeRoute} className={styles.backButton}>
          <img className={styles.arrow} src={arrow} alt="back arrow" />
        </button>
      )}
      <button
        disabled={player === "comp" && !iconInfo.compIcon}
        className={styles[`${player}ConfirmButton`]}
        onClick={player === "user" ? toggleIconSelectFlipped : compOnClick}
      >
        {`CONFIRM ${player.toUpperCase()} ICON`}
      </button>
    </div>
  );
};

export default IconSelect;
