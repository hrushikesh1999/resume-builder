import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainAccordion from "../components/accordion/MainAccordion";
import { fetchResume, setDownloadVisible } from "../redux/actions";
import Download from "./Download";

const useStyles = makeStyles(() => ({
  btn: {
    float: "right",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "50px",
  },
}));
const Resume = () => {
  const dispatch = useDispatch();
  const isDownloadVisible = useSelector((state) => state.isDownloadVisible);
  const classes = useStyles();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchResume(params.userId));
  }, [dispatch, params.userId]);

  const resumeForm = () => {
    return (
      <div>
        <MainAccordion />
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={() => {
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

export default Resume;
