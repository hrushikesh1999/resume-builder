import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEducationData } from "../../../../redux/actions";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
  },
  border: {
    borderLeft: "solid",
    borderWidth: "3px",
    borderColor: "grey",
    paddingLeft: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "35ch",
    marginTop: "10px",
  },
}));
const EducationForm = ({ timeStamp, setTimeS }) => {
  const dispatch = useDispatch();
  const [education, setEducation] = useState({
    key: timeStamp,
    college: "",
    startDate: new Date("2021-08-01T21:11:54"),
    endDate: new Date("2021-08-01T21:11:54"),
    degree: "",
    fieldOfStudy: "",
    location: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    setEducation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSaveClick = () => {
    dispatch(addEducationData(education));
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.border}>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ marginLeft: "10px" }}
            fullWidth
            label="College Name"
            variant="outlined"
            color="primary"
            size="small"
            name="college"
            value={education.college}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div style={{ margin: "0px 0px 10px 10px" }}>
            <KeyboardDatePicker
              style={{ margin: "0px 15px 10px 0px", width: "35ch" }}
              disableToolbar
              variant="dialog"
              format="MM/yyyy"
              views={["year", "month"]}
              label="start date"
              value={education.startDate}
              onChange={(date) => {
                setEducation((prevState) => ({
                  ...prevState,
                  startDate: date,
                }));
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              style={{ width: "35ch" }}
              disableToolbar
              variant="dialog"
              format="MM/yyyy"
              views={["year", "month"]}
              label="end date"
              name="endDate"
              value={education.endDate}
              onChange={(date) => {
                setEducation((prevState) => ({ ...prevState, endDate: date }));
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
        <div>
          <TextField
            label="Degree"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.textField}
            name="degree"
            value={education.degree}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Field of study"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.textField}
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Location"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.textField}
            name="location"
            value={education.location}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              setTimeS(timeStamp);
            }}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ float: "right" }}
            onClick={onSaveClick}
          >
            save
          </Button>
        </div>
      </div>
    </form>
  );
};
export default EducationForm;
