import { Container } from '@/components/Container/Container'
import styles from './PersonalAccount.module.scss'
import { MainProfileInfo } from './components/MainProfileInfo/MainProfileInfo'
import { WorksSection } from './components/WorksSection/WorksSection'

export const PersonalAccount = () => {

    return (
        <main className={styles.main}>
            <MainProfileInfo />
            <Container>
                <WorksSection />
            </Container>
        </main >
    )
}
