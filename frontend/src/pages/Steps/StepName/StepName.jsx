import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepName = ({ onNext }) => {
  return (
    <div>
      Enter Name
      <div>
        <Button onClick={onNext} text="next" />
      </div>
    </div>
  );
};

export default StepName;
