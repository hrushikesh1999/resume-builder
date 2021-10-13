import React, { useEffect, useState } from "react";
//material ui
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { setDownloadVisible, setTemplate } from "../../redux/actions";

const SubHeader = () => {
  const dispatch = new useDispatch();
  const [open, setOpen] = useState(false);
  const descriptionElementRef = React.useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          dispatch(setDownloadVisible(false));
        }}
      >
        Edit
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Select Template
      </Button>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              hi
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              color="primary"
              onClick={() => {
                dispatch(setTemplate("temp2"));
              }}
            >
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default SubHeader;
