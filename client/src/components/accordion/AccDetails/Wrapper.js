import React from "react";
//material ui

const Wrapper = ({ Component }) => {
  return (
    <div>
      <div>
        <Component />
      </div>
    </div>
  );
};

export default Wrapper;
