import React from "react";
//material ui

const Wrapper = ({ name, Component, FormComponent, deleteAction }) => {
  return (
    <div>
      <div>
        <Component
          FormComponent={FormComponent}
          deleteAction={deleteAction}
          name={name}
        />
      </div>
    </div>
  );
};

export default Wrapper;
