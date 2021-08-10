import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepPhoneEmail = ({ onNext }) => {
  return (
    <div>
      Phone Or Email is required.
      <div>
        <Button onClick={onNext} text="next" />
      </div>
    </div>
  );
};

export default StepPhoneEmail;
