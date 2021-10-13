import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProjectData } from "../../../redux/actions";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
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
const ProjectForm = ({ timeStamp, setTimeS }) => {
  const dispatch = useDispatch();
  const [project, setProject] = useState({
    key: timeStamp,
    title: "",
    description: "",
  });
  // const defaultValues = useSelector((state) => state.resume.projects[0]);
  // console.log(defaultValues);
  // useEffect(() => {
  //   if (defaultValues && project !== defaultValues) {
  //     setProject((prevState) => ({ ...prevState, ...defaultValues }));
  //   }
  // }, [defaultValues]);
  const classes = useStyles();
  const handleChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSaveClick = () => {
    dispatch(addProjectData(project));
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.border}>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ marginLeft: "10px" }}
            fullWidth
            label="Project Title"
            variant="outlined"
            color="primary"
            size="small"
            name="title"
            value={project.title}
            onChange={(e) => handleChange(e)}
          />
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.textField}
            minRows={3}
            placeholder="Description"
            name="description"
            value={project.description}
            onChange={(e) => {
              handleChange(e);
            }}
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
export default ProjectForm;
