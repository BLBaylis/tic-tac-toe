import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../iconEditor/IconEditor";
import IconShowcase from "../iconShowcase/IconShowcase";

const IconSelect = ({changeSetting, toggleIconSelect, flip, iconInfo, player}) => {
  return (
    <div className={styles.iconSelect}>
      <h2 className={styles.heading}>
        {"SELECT "}
        <span className={styles.highlight}>{player.toUpperCase()}</span>
        {" ICON"}
      </h2>
      <IconEditor
        changeSetting={newColour =>
          changeSetting(player, "colour", newColour)
        }
        iconInfo={iconInfo[player]}
      />
      <IconShowcase
        changeSetting={newIcon =>
          changeSetting(player, "icon", newIcon)
        }
      />
      {player === "comp" && (
        <div className={styles.buttonRow}>
          <button onClick={flip} className={styles.backButton}>
            BACK
          </button>
          <button
            className={styles.confirmButtonComp}
            onClick={toggleIconSelect}
          >
            {`CONFIRM ${player.toUpperCase()} ICON`}
          </button>
        </div>
      )}
      {player === "user" && (
        <button className={styles.button} onClick={flip}>
          {`CONFIRM ${player.toUpperCase()} ICON`}
        </button>
      )}
    </div>
  );
};

export default IconSelect;
