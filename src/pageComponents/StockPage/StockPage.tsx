import styles from './StockPage.module.scss';
import { FC } from "react"
import StockSearch from './components/StockSearch/StockSearch';
import { Projects } from './components/Projects/Projects';
import { Container } from '@/components/Container/Container';

const StockPage: FC = () => {
    return (
        <main className={styles.main}>
            <StockSearch />
            <Container>
                <Projects />
            </Container>
        </main >
    )
};

export default StockPage;
