import styles from './PromoStartingItem.module.scss';
import { FC } from "react"

const PromoStartingItem: FC<{ img: any, title: string }> = ({ img, title }) => {


    return (
        <div className={styles.main}>
            {img}
            <p className={styles.title}>{title}</p>
        </div>
    )
};

export default PromoStartingItem;
