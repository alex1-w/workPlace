import styles from './PriceBlock.module.scss'
import { priceVariant } from '@/links/price.data'
import { PriceItem } from './PriceItem/PriceItem'

export const PriceBlock = () => {

    return (
        <div className={styles.main}>
            {priceVariant.map((item, i) => (
                <PriceItem
                    additionalOptions={item.additionalOptions}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    reworkCount={item.reworkCount}
                    timeFrame={item.timeFrame}
                    key={i}
                />
            ))}
        </div>
    )
}
