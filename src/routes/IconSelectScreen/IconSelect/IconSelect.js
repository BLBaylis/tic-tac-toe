import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "./IconEditor/IconEditor";
import IconShowcase from "./IconShowcase/IconShowcase";
import IconSelectNav from "./IconSelectNav/IconSelectNav";

const IconSelect = ({
  player,
  iconInfo,
  iconSelectFlipped,
  iconSelectFuncs
}) => {
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
          iconSelectFuncs={iconSelectFuncs}
        />
      </div>
    </div>
  );
};

export default IconSelect;
