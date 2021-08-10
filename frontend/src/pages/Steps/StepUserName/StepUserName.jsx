import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepUserName = ({ onNext }) => {
  return (
    <div>
      Enter Username
      <div>
        <Button onClick={onNext} text="next" />
      </div>
    </div>
  );
};

export default StepUserName;
