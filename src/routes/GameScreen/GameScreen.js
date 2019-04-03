import React from "react";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Game from "./Game/Game";
import IconPreview from "./IconPreview/IconPreview";
import styles from "./GameScreen.module.scss";

const GameScreen = ({ iconInfo, toggleIconSelectFlipped, changeRoute }) => {
  const isLandscape = useMediaQuery("(orientation:landscape)");
  return (
    <React.Fragment>
      {isLandscape && (
        <div className={styles.gameScreenWrapper}>
          <div className={styles.gameScreen}>
            <IconPreview
              iconInfo={iconInfo}
              changeRoute={() => changeRoute("iconSelect")}
              toggleIconSelectFlipped={toggleIconSelectFlipped}
            />
            <Game
              iconInfo={iconInfo}
              changeRoute={() => changeRoute("settings")}
            />
          </div>
        </div>
      )}
      {!isLandscape && (
        <div className={styles.gameScreen}>
          <IconPreview
            iconInfo={iconInfo}
            changeRoute={() => changeRoute("iconSelect")}
            toggleIconSelectFlipped={toggleIconSelectFlipped}
          />
          <Game
            iconInfo={iconInfo}
            changeRoute={() => changeRoute("settings")}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default GameScreen;
