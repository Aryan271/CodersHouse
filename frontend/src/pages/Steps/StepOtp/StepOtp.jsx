import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepOtp = ({ onNext }) => {
  return (
    <>
      Enter Otp
      <div>
        <Button onClick={onNext} text="next" />
      </div>
    </>
  );
};

export default StepOtp;
