import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkillData } from "../../../redux/actions";
//material ui
import { makeStyles } from "@material-ui/core/styles";
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
const SkillForm = ({ timeStamp, setTimeS }) => {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState({
    key: timeStamp,
    skills: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    setSkill((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSaveClick = () => {
    dispatch(addSkillData(skill));
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.border}>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ marginLeft: "10px" }}
            fullWidth
            label="skills"
            variant="outlined"
            color="primary"
            size="small"
            name="skills"
            value={skill.college}
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
export default SkillForm;
