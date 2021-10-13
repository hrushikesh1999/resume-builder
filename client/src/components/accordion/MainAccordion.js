import React, { useState } from "react";

import { AccList } from "./AccList";
import { setOrder } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
//material ui
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Wrapper from "./AccDetails/Wrapper";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState("panel1");
  const [accEle, setAccEle] = useState(AccList);
  const accOrder = useSelector((state) => state.accOrder);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // change background colour if dragging
    background: isDragging ? "#ffe6e6" : "white",
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "grey" : "lightgrey",
    background: "lightgrey",
    padding: 8,
  });

  const renderAccordionList = accEle.map((element, index) => {
    return (
      <Draggable key={element.panel} draggableId={element.panel} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <Accordion
              style={{ backgroundColor: "inherit" }}
              key={element.panel}
              square
              expanded={expanded === `${element.panel}`}
              onChange={handleChange(`${element.panel}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{element.summary}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Wrapper
                  Component={element.Component}
                  FormComponent={element.FormComponent}
                  deleteAction={element.deleteAction}
                  name={element.summary}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </Draggable>
    );
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      accEle,
      result.source.index,
      result.destination.index
    );

    const order = reorder(
      accOrder,
      result.source.index,
      result.destination.index
    );
    dispatch(setOrder(order));

    setAccEle(items);
  };
  return (
    <div>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {renderAccordionList}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default MainAccordion;
