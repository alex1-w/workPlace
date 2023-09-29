import styles from './StepTwo.module.scss'
import { Package } from './Package/Package'


const packagesInfo = [
    {
        name: 'Эконом'
    },
    {
        name: 'Стандарт'
    },
    {
        name: 'Бизнес'
    },
]

export const StepTwo = () => {
    return (
        <div className={styles.main}>

            <h1>Пакеты</h1>
            
            <div className={styles.grid}>
                {packagesInfo.map((item) => (
                    <Package title={item.name} key={item.name} />
                ))}
            </div>

        </div>
    )
}
