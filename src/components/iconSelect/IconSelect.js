import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../iconEditor/IconEditor";
import IconShowcase from "../iconShowcase/IconShowcase";

const IconSelect = props => {
  return (
    <div className={styles.iconSelect}>
      <h2 className={styles.heading}>
        {"SELECT "}
        <span className={styles.highlight}>{props.player.toUpperCase()}</span>
        {" ICON"}
      </h2>
      <IconEditor
        changeSetting={newColour =>
          props.changeSetting(props.player, "colour", newColour)
        }
        iconInfo={props.iconInfo[props.player]}
      />
      <IconShowcase
        changeSetting={newIcon =>
          props.changeSetting(props.player, "icon", newIcon)
        }
      />
      {props.player === "comp" && (
        <div className={styles.buttonRow}>
          <button onClick={props.flip} className={styles.backButton}>
            BACK
          </button>
          <button
            className={styles.confirmButtonComp}
            onClick={props.toggleIconSelect}
          >
            {`CONFIRM ${props.player.toUpperCase()} ICON`}
          </button>
        </div>
      )}
      {props.player === "user" && (
        <button className={styles.confirmButtonUser} onClick={props.flip}>
          {`CONFIRM ${props.player.toUpperCase()} ICON`}
        </button>
      )}
    </div>
  );
};

export default IconSelect;
