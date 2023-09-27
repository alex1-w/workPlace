import styles from './CreateWorkNav.module.scss'

const createWorkNav = [
    {
        name: 'Основные',
    },
    {
        name: 'Стоимость и опции',
    },
    {
        name: 'Описание',
    },
    {
        name: 'Требования',
    },
    {
        name: 'Галерея',
    },
    {
        name: 'Публикация',
    }
]

export const CreateWorkNav = () => {
    return (
        <nav className={styles.main}>
            <ul>
                {createWorkNav.map((item, i) => (

                    <li key={item.name} className={styles.step}>
                        {/* <span /> */}
                        <div>
                            <div>
                                <p>{i + 1}</p>
                            </div>
                            <p>{item.name}</p>

                        </div>
                        {/* <span /> */}
                    </li>

                ))}
            </ul>
        </nav >
    )
}
