import React from "react";
import MainAccordion from "../components/accordion/MainAccordion";
import { useDispatch, useSelector } from "react-redux";
import { createResume, setDownloadVisible } from "../redux/actions";
//material ui
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Download from "./Download";

const useStyles = makeStyles(() => ({
  btn: {
    float: "right",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "50px",
  },
}));
const New = () => {
  const isDownloadVisible = useSelector((state) => state.isDownloadVisible);
  const dispatch = useDispatch();
  const classes = useStyles();

  const resumeForm = () => {
    return (
      <div>
        <MainAccordion />
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={() => {
            dispatch(createResume());
            dispatch(setDownloadVisible(true));
          }}
        >
          Next
        </Button>
      </div>
    );
  };

  const resumeDownload = () => {
    return <Download />;
  };

  if (isDownloadVisible) {
    return resumeDownload();
  } else {
    return resumeForm();
  }
};

export default New;
