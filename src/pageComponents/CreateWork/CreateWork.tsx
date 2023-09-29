'use client'
import { useState } from 'react'
import styles from './CreateWork.module.scss'
import { CreateWorkNav } from './CreateWorkNav/CreateWorkNav'
import { StepOne } from './pageVariants/StepOne/StepOne'
import { StepTwo } from './pageVariants/StepTwo/StepTwo'

enum Steps {
    one,
    two,
    three,
    four,
}

export const CreateWork = () => {
    const [step, setStep] = useState<Steps>(0)

    console.log(step);

    const steps = {
        ['stepOne']: <StepOne />,
        ['stepTwo']: <StepTwo />,
    }

    return (
        <main className={styles.main}>
            <CreateWorkNav setStep={setStep} />

            {step === 0 && steps.stepOne}
            {step === 1 && steps.stepTwo}

        </main >
    )
}
