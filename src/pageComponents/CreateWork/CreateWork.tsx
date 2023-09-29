"use client";
import { useState } from "react";
import styles from "./CreateWork.module.scss";
import { CreateWorkNav } from "./CreateWorkNav/CreateWorkNav";
import { StepOne } from "./pageVariants/StepOne/StepOne";
import { StepTwo } from "./pageVariants/StepTwo/StepTwo";
import { StepThree } from "./pageVariants/StepThree/StepThree";
import { StepFour } from "./pageVariants/StepFour/StepFour";
import { StepFive } from "./pageVariants/StepFive/StepFive";
import { StepSix } from "./pageVariants/StepSix/StepSix";

enum Steps {
  one,
  two,
  three,
  four,
  five,
  six,
}

export const CreateWork = () => {
  const [step, setStep] = useState<Steps>(0);

  console.log(step);

  const steps = {
    ["stepOne"]: <StepOne />,
    ["stepTwo"]: <StepTwo />,
    ["stepThree"]: <StepThree />,
    ["stepFour"]: <StepFour />,
    ["stepFive"]: <StepFive />,
    ["stepSix"]: <StepSix />,
  };

  return (
    <main className={styles.main}>
      <CreateWorkNav setStep={setStep} step={step} />

      {step === 0 && steps.stepOne}
      {step === 1 && steps.stepTwo}
      {step === 2 && steps.stepThree}
      {step === 3 && steps.stepFour}
      {step === 4 && steps.stepFive}
      {step === 5 && steps.stepSix}
    </main>
  );
};
