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
        <React.Fragment>
          <button onClick={props.flip} className={styles.button}>
            BACK
          </button>
          <button className={styles.button} onClick={props.toggleIconSelect}>
            {`CONFIRM ${props.player.toUpperCase()} ICON`}
          </button>
        </React.Fragment>
      )}
      {props.player === "user" && (
        <button className={styles.button} onClick={props.flip}>
          {`CONFIRM ${props.player.toUpperCase()} ICON`}
        </button>
      )}
    </div>
  );
};

export default IconSelect;
