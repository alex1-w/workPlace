import styles from './WorkPageComponent.module.scss'
import { Container } from '@/components/Container/Container'
import { WorkInfo } from './components/WorkInfo/WorkInfo'
import { PriceBlock } from './components/PriceBlock/PriceBlock'
import FreelancerCard from '@/components/FreelancerCard/FreelancerCard'
import { freelancers } from '@/links/links.data'
const person = freelancers[0]

export const WorkPageComponent = () => {

    return (
        <main className={styles.main}>
            <div className={styles.mainSection}>
                <WorkInfo />
                <div>
                    <PriceBlock />
                    <FreelancerCard
                        countProject={person.countProject}
                        id={person.id}
                        img={person.img}
                        name={person.name}
                        profession={person.profession}
                        rating={person.rating}
                        feedback={person.feedback}
                        key={person.id}
                    />
                </div>
            </div>
        </main >
    )
}
