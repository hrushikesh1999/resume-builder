import React, { useState } from "react";
import { updatePersonalData } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";

//material ui
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "35ch",
    marginTop: "10px",
  },
}));
const PersonalDetails = () => {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (e) => {
    setPersonal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSaveClick = () => {
    dispatch(updatePersonalData(personal));
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Name"
          name="name"
          value={personal.name}
          variant="outlined"
          color="primary"
          size="small"
          className={classes.textField}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Email id"
          name="email"
          value={personal.email}
          variant="outlined"
          color="primary"
          size="small"
          className={classes.textField}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Phone"
          name="phone"
          value={personal.phone}
          variant="outlined"
          color="primary"
          size="small"
          className={classes.textField}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Address"
          name="address"
          value={personal.address}
          fullWidth
          style={{ margin: "8px", marginTop: "10px" }}
          variant="outlined"
          color="primary"
          size="small"
          onChange={(e) => handleChange(e)}
        />
        <div>
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

export default PersonalDetails;
