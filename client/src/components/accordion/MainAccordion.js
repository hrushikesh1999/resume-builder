import React, { useState } from "react";

import { AccList } from "./AccList";
//material ui
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Wrapper from "./AccDetails/Wrapper";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const MainAccordion = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderAccordionList = () => {
    return AccList.map((element) => {
      return (
        <Accordion
          key={element.panel}
          square
          expanded={expanded === `${element.panel}`}
          onChange={handleChange(`${element.panel}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{element.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Wrapper Component={element.Component} />
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{renderAccordionList()}</div>;
};

export default MainAccordion;
