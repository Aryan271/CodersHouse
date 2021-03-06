import React from "react";
import { useState } from "react";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import styles from "./Login.module.css";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <>
      <Step onNext={onNext} />
    </>
  );
};

export default Login;
