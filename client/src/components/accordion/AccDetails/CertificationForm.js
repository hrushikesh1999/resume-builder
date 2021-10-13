import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCertificationData } from "../../../redux/actions";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
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
const CertificationForm = ({ timeStamp, setTimeS }) => {
  const dispatch = useDispatch();
  const [certification, setCertification] = useState({
    key: timeStamp,
    name: "",
    organization: "",
    checked: false,
    startDate: new Date("2021-08-01T21:11:54"),
    endDate: new Date("2021-08-01T21:11:54"),
    id: "",
    url: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    setCertification((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSaveClick = () => {
    dispatch(addCertificationData(certification));
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.border}>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ marginLeft: "10px" }}
            label="Name"
            variant="outlined"
            color="primary"
            size="small"
            name="name"
            value={certification.name}
            className={classes.textField}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Issuing organization"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.textField}
            name="organization"
            value={certification.organization}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
          <FormControlLabel
            control={
              <Checkbox
                name="checked"
                onChange={() => {
                  setCertification((prevState) => ({
                    ...prevState,
                    checked: !prevState.checked,
                  }));
                }}
                color="primary"
              />
            }
            label="No expiration date"
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
              value={certification.startDate}
              onChange={(date) => {
                setCertification((prevState) => ({
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
              disabled={certification.checked}
              disableToolbar
              variant="dialog"
              format="MM/yyyy"
              views={["year", "month"]}
              label="end date"
              name="endDate"
              value={certification.endDate}
              onChange={(date) => {
                setCertification((prevState) => ({
                  ...prevState,
                  endDate: date,
                }));
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
        <div>
          <TextField
            label="Credential ID"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.textField}
            name="id"
            value={certification.id}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Credential URL"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.textField}
            name="url"
            value={certification.url}
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
export default CertificationForm;
