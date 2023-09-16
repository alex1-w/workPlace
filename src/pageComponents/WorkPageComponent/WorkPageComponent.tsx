import styles from './WorkPageComponent.module.scss'
import { Container } from '@/components/Container/Container'
import { WorkInfo } from './components/WorkInfo/WorkInfo'
import { PriceBlock } from './components/PriceBlock/PriceBlock'

export const WorkPageComponent = () => {

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.mainSection}>
                    <WorkInfo/>
                    <PriceBlock />
                </div>
            </Container>
        </main >
    )
}
