import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepAvatar = ({ onNext }) => {
  return (
    <div>
      Select Avatar
      <div>
        <Button onClick={onNext} text="next" />
      </div>
    </div>
  );
};

export default StepAvatar;
