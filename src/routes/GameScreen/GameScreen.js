import React from 'react';
import Game from '../../containers/Game/Game';
import IconPreview from './IconPreview/IconPreview';
import styles from './GameScreen.module.scss';

const GameScreen = ({ iconInfo, toggleIconSelectFlipped, changeRoute }) => {
  return (
    <div className={styles.gameScreenWrapper}>
      <div className={styles.gameScreen}>
        <IconPreview
          iconInfo={iconInfo}
          changeRoute={changeRoute}
          toggleIconSelectFlipped={toggleIconSelectFlipped}
        />
        <Game iconInfo={iconInfo} changeRoute={changeRoute}/>
      </div>
    </div>
  )
}

export default GameScreen
