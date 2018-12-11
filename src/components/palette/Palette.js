import React from "react";
import styles from "./Palette.module.scss";

const Palette = props => {
  return (
    <div className={styles.palette}>
      <PaletteColour
        colour = "black"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "grey"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "darkRed"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "lightRed"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "orange"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "yellow"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "darkGreen"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "lightBlue1"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "darkBlue1"
        changeSetting={props.changeSetting}
      />

      <PaletteColour
        colour = "purple"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "white"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "silver"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "brown"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "pink"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "gold"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "almond"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "lightGreen"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "lightBlue2"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "darkBlue2"
        changeSetting={props.changeSetting}
      />
      <PaletteColour
        colour = "lightPurple"
        changeSetting={props.changeSetting}
      />
    </div>
  );
};

const PaletteColour = props => {
  const colour = props.colour;
  return (
    <button onClick={() => props.changeSetting(colour)}
        className={`${styles.colour} ${styles[colour]}`}></button>
  );
}

export default Palette;
