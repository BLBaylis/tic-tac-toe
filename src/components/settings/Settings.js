import React from "react";
import styles from "./Settings.module.scss";

class Settings extends React.Component {
  state = {
    gridSize: "3",
    firstMove: "user"
  };

  settingsDivRef = React.createRef();

  componentDidMount() {
    this.updateDivHeight();
    window.addEventListener("resize", this.updateDivHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDivHeight);
  }

  updateDivHeight = () => {
    const settingsDiv = this.settingsDivRef.current;
    const settingsDivHeight = window.getComputedStyle(settingsDiv).height;
    settingsDiv.style.fontSize = settingsDivHeight;
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSettingsSubmit = event => {
    event.preventDefault();
    console.log(event);
    this.props.changeGameSetting(this.state.gridSize, this.state.firstMove);
  };

  render() {
    return (
      <div className={styles.settings} ref={this.settingsDivRef}>
        <form onSubmit={this.handleSettingsSubmit} className={styles.form}>
          <h2 className={styles.subheading}>Settings</h2>
          <div className={styles.innerForm}>
            <div className={styles.question} style={{ marginTop: 0 }}>
              Who goes first?
            </div>
            <label className={styles.formRow}>
              <input
                name="firstMove"
                type="radio"
                value="user"
                checked={this.state.firstMove === "user"}
                onChange={this.handleOnChange}
              />{" "}
              User
            </label>
            <label className={styles.formRow} style={{ left: "51.5%" }}>
              <input
                name="firstMove"
                type="radio"
                value="comp"
                checked={this.state.firstMove === "comp"}
                onChange={this.handleOnChange}
              />{" "}
              Comp
            </label>
            <div className={styles.question}>Which grid size?</div>
            <label className={styles.formRow}>
              <input
                name="gridSize"
                type="radio"
                value="3"
                checked={this.state.gridSize === "3"}
                onChange={this.handleOnChange}
              />{" "}
              3 x 3
            </label>
            <label className={styles.formRow}>
              <input
                name="gridSize"
                type="radio"
                value="5"
                checked={this.state.gridSize === "5"}
                onChange={this.handleOnChange}
              />{" "}
              5 x 5
            </label>
            <label className={styles.formRow}>
              <input
                name="gridSize"
                type="radio"
                value="7"
                checked={this.state.gridSize === "7"}
                onChange={this.handleOnChange}
              />{" "}
              7 x 7
            </label>
          </div>
          <input
            className={styles.button}
            type="submit"
            value="Save Settings"
          />
        </form>
      </div>
    );
  }
}

export default Settings;
