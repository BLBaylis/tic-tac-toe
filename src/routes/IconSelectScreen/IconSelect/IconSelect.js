import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "./IconEditor/IconEditor";
import IconShowcase from "./IconShowcase/IconShowcase";
import IconSelectNav from "./IconSelectNav/IconSelectNav";
import FourByThreeAspectRatioDiv from "../../../components/FourByThreeAspectRatioDiv/FourByThreeAspectRatioDiv";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const jsStyles = {
  typography: {
    display: "flex",
    fontSize: "calc(19px + 5 * ((100vw - 320px) / 280))",
    "@media (orientation: landscape) and (min-width: 600px)": {
      fontSize: "35px"
    }
  }
};

const IconSelect = ({
  classes,
  player,
  iconInfo,
  flipped,
  iconSelectFuncs,
  gameMode
}) => {
  const { updateIconInfo } = iconSelectFuncs;
  const otherPlayer = player === "user" ? "comp" : "user";
  const eitherCompOrPlayer2 = gameMode === "pvp" ? "PLAYER 2" : "COMP";
  const eitherPlayerOrPlayer1 = gameMode === "pvp" ? "PLAYER 1" : "PLAYER";
  const selectedPlayer =
    player === "user" ? eitherPlayerOrPlayer1 : eitherCompOrPlayer2;
  return (
    <FourByThreeAspectRatioDiv>
      <div className={styles.iconSelect}>
        <Typography
          variant="h2"
          classes={{ root: classes.typography }}
          className={styles.heading}
        >
          SELECT&nbsp;
          <span className={styles.highlight}>{selectedPlayer}</span>
          &nbsp;ICON
        </Typography>
        <IconEditor
          player={player}
          flipped={flipped}
          updateIconInfo={newColour =>
            updateIconInfo(player, { iconColour: newColour })
          }
          iconInfo={iconInfo}
        />
        <IconShowcase
          player={player}
          flipped={flipped}
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
    </FourByThreeAspectRatioDiv>
  );
};

export default withStyles(jsStyles)(IconSelect);
