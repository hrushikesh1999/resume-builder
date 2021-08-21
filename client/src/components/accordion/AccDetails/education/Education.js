import React, { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import { useDispatch } from "react-redux";
import { deleteEducationData } from "../../../../redux/actions";
//material ui
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

const Education = () => {
  const dispatch = useDispatch();
  const [eduCount, setEduCount] = useState([]);
  const [timeS, setTimeS] = useState(null);

  useEffect(() => {
    let comps = eduCount;
    let index = comps.findIndex((comp) => comp.props.timeStamp === timeS);
    if (index !== -1) {
      dispatch(deleteEducationData(index));
    }
    let filtered = comps.filter((comp) => {
      return comp.props.timeStamp !== timeS;
    });
    setEduCount(filtered);
  }, [timeS]);
  const renderEducationForm = () => {
    return eduCount;
  };

  const onAddClick = (e) => {
    setEduCount((prevState) => [
      ...prevState,
      <EducationForm
        key={e.timeStamp}
        timeStamp={e.timeStamp}
        setTimeS={setTimeS}
      />,
    ]);
  };
  return (
    <div>
      {renderEducationForm()}
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={onAddClick}
      >
        <AddIcon fontSize="small" />
        Add education
      </Button>
    </div>
  );
};

export default Education;
