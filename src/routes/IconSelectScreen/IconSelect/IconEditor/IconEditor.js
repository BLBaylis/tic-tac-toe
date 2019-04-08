import React from "react";
import styles from "./IconEditor.module.scss";
import Icon from "../../../../components/Icon/Icon";
import { Card } from "@material-ui/core";
import Paintbrush from "../Paintbrush";
import { hex } from "color-convert";

const IconEditor = ({ iconInfo, updateIconInfo, player, flipped }) => {
  const { [`${player}Icon`]: icon, [`${player}IconColour`]: colour } = iconInfo;
  const bgColour = getBgColour(colour);
  const userBackface = flipped && player === "user";
  const compBackface = !flipped && player === "comp";
  return (
    <Card className={styles.iconEditor}>
      <div className={styles.canvas} style={{ backgroundColor: bgColour }}>
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
          <Paintbrush className={styles.paintImg} colour={bgColour} />
        </i>
      </div>
    </Card>
  );
};

const getBgColour = colour => {
  const colourBrightness = hex.hsl(`${colour.slice(1)}`)[2];
  return colourBrightness < 95 ? "#fff" : "#f9ab55";
};

export default IconEditor;
