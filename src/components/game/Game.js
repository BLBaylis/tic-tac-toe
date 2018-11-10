import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameLog : {
                squares : [null, null, null, null, null, null, null, null, null]
            },
            turnNo : 0,
            playerTurn : true
        };
    }

    handleClick(i) {
        
    }

}

export default Game