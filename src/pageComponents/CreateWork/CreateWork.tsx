"use client";
import { useState } from "react";
import styles from "./CreateWork.module.scss";
import { CreateWorkNav } from "./CreateWorkNav/CreateWorkNav";
import { StepOne } from "./pageVariants/StepOne/StepOne";
import { StepTwo } from "./pageVariants/StepTwo/StepTwo";
import { StepThree } from "./pageVariants/StepThree/StepThree";
import { StepFour } from "./pageVariants/StepFour/StepFour";

enum Steps {
  one,
  two,
  three,
  four,
}

export const CreateWork = () => {
  const [step, setStep] = useState<Steps>(0);

  console.log(step);

  const steps = {
    ["stepOne"]: <StepOne />,
    ["stepTwo"]: <StepTwo />,
    ["stepThree"]: <StepThree />,
    ["stepFour"]: <StepFour />,
  };

  return (
    <main className={styles.main}>
      <CreateWorkNav setStep={setStep} step={step} />

      {step === 0 && steps.stepOne}
      {step === 1 && steps.stepTwo}
      {step === 2 && steps.stepThree}
      {step === 3 && steps.stepFour}
    </main>
  );
};
