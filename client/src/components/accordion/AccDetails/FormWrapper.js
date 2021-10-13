import React from "react";
import useForm from "../../../customHooks/useForm";
//material ui
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

const FormWrapper = ({ name, FormComponent, deleteAction }) => {
  const [count, onAddClick] = useForm(name, FormComponent, deleteAction);
  const renderForm = () => {
    return count;
  };
  return (
    <div>
      {renderForm()}
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={onAddClick}
      >
        <AddIcon fontSize="small" />
        Add
      </Button>
    </div>
  );
};

export default FormWrapper;
