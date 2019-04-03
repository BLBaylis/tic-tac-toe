import React from "react";
import styles from "./IconEditor.module.scss";
import Icon from "../../../../components/Icon/Icon";
import Paintbrush from "../Paintbrush";
import { hex } from "color-convert";

const IconEditor = ({ iconInfo, updateIconInfo, player, flipped }) => {
  const { [`${player}Icon`]: icon, [`${player}IconColour`]: colour } = iconInfo;
  const colourBrightness = hex.hsl(`${colour.slice(1)}`)[2];
  const userBackface = flipped && player === "user";
  const compBackface = !flipped && player === "comp";
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner}>
          <Icon icon={icon} colour={colour} />
        </div>
      </div>
      <div className={styles.palette}>
        <input
          type="color"
          aria-label="palette"
          onChange={e => updateIconInfo(e.target.value)}
          value={colour}
          tabIndex={!userBackface && !compBackface ? "0" : "-1"}
        />
        <i className={styles.paintIcon}>
          <Paintbrush
            className={styles.paintImg}
            colour={colourBrightness < 95 ? "#fff" : "#f9ab55"}
          />
        </i>
      </div>
    </div>
  );
};
export default IconEditor;