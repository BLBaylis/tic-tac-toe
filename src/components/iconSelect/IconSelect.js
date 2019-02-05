import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../iconEditor/IconEditor";
import IconShowcase from "../iconShowcase/IconShowcase";

const IconSelect = ({
  changeSetting,
  toggleIconSelect,
  flip,
  iconInfo,
  player
}) => {
  return (
    <div className={styles.iconSelectWrapper}>
      <div className={styles.iconSelect}>
        <h2 className={styles.heading}>
          SELECT&nbsp;
          <span className={styles.highlight}>{player.toUpperCase()}</span>
          &nbsp;ICON
        </h2>
        <IconEditor
          changeSetting={newColour =>
            changeSetting(player, "colour", newColour)
          }
          iconInfo={iconInfo[player]}
        />
        <IconShowcase
          changeSetting={newIcon => changeSetting(player, "icon", newIcon)}
        />
        <IconSelectNav
          player={player}
          flip={flip}
          toggleIconSelect={toggleIconSelect}
        />
      </div>
    </div>
  );
};

const IconSelectNav = ({ player, flip, toggleIconSelect }) => {
  const onClick = player === "user" ? flip : toggleIconSelect;
  return (
    <div className={styles.buttonRow}>
      {player === "comp" && (
        <button onClick={flip} className={styles.backButton}>
          BACK
        </button>
      )}
      <button className={styles[`${player}ConfirmButton`]} onClick={onClick}>
        {`CONFIRM ${player.toUpperCase()} ICON`}
      </button>
    </div>
  );
};

export default IconSelect;
