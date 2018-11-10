import React from "react";
import styles from './Game.module.scss';
import GameSquare from "../gameSquare/GameSquare";

class Game extends React.Component {

    state = {
            gameLog : [Array(9).fill(null)],
            turnNo : 0,
            userTurn : true
    };    

    handleClick = (gridNo) => {
        const gameLog = this.state.gameLog.slice();
        const currentTurn = gameLog[gameLog.length - 1].slice();
        currentTurn[gridNo] = this.state.userTurn ? "user" : "ai";
        this.setState({
            gameLog : gameLog.concat([currentTurn]),
            turnNo : this.state.turnNo + 1,
            userTurn : !(this.state.userTurn)
        });
    };

    render() {
        return (
            <div className={styles.grid}>
                <GameSquare onClick = {() => this.handleClick(0)}/>
                <GameSquare onClick = {() => this.handleClick(1)}/>
                <GameSquare onClick = {() => this.handleClick(2)}/>
                <GameSquare onClick = {() => this.handleClick(3)}/>
                <GameSquare onClick = {() => this.handleClick(4)}/>
                <GameSquare onClick = {() => this.handleClick(5)}/>
                <GameSquare onClick = {() => this.handleClick(6)}/>
                <GameSquare onClick = {() => this.handleClick(7)}/>
                <GameSquare onClick = {() => this.handleClick(8)}/>
            </div>
        );
    }
}

export default Game;
