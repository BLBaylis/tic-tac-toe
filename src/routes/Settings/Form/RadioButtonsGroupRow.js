import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 2,
    width: `calc(100% - ${theme.spacing.unit * 6}px)`
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: "flex",
    justifyContent: "flex-start"
  }
});

const RadioButtonsGroupRow = ({
  classes,
  fieldSetPublic,
  fieldSetPrivate,
  currentFieldSetValue,
  formControlLabelInfo,
  handleChange
}) => {
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{fieldSetPublic}</FormLabel>
      <RadioGroup
        row
        aria-label={fieldSetPublic}
        name={fieldSetPrivate}
        className={classes.group}
        value={currentFieldSetValue}
        onChange={handleChange(fieldSetPrivate)}
      >
        {formControlLabelInfo.map(labelInfo => {
          const { value, label } = labelInfo;
          return (
            <FormControlLabel
              value={value}
              control={<Radio />}
              label={label}
              key={value}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

RadioButtonsGroupRow.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  fieldSetPublic: PropTypes.string.isRequired,
  fieldSetPrivate: PropTypes.string.isRequired,
  currentFieldSetValue: PropTypes.string.isRequired,
  formControlLabelInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(RadioButtonsGroupRow);
