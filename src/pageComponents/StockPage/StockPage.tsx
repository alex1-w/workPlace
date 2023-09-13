import styles from './StockPage.module.scss';
import { FC } from "react"
import StockSearch from './components/StockSearch/StockSearch';

const StockPage: FC = () => {
    return (
        <main>
            <StockSearch />
        </main >
    )
};

export default StockPage;
