import React from "react";
import styles from "./Flipper.module.scss";

class Flipper extends React.Component {
  state = {
    flipped: false
  };

  flip = () => {
    this.setState(prevState => ({ flipped: !prevState.flipped }));
  };

  render() {
    const flipped = this.state.flipped ? styles.flipped : null;
    const FrontComponent = React.cloneElement(this.props.front, {
      flip: this.flip
    });
    const BackComponent = React.cloneElement(this.props.back, {
      flip: this.flip
    });
    return (
      <div className={styles.flipperContainer}>
        <div className={`${styles.flipper} ${flipped}`}>
          <div className={styles.front}>{FrontComponent}</div>
          <div className={styles.back}>{BackComponent}</div>
        </div>
      </div>
    );
  }
}

export default Flipper;
