import styles from './WorksSection.module.scss'
import Link from 'next/link'
import { MyWork } from './MyWork/MyWork'
import { plusIcon } from '@/icons/icons'
const works = new Array(8).fill('')


export const WorksSection = () => {

    return (
        <section className={styles.main}>
            <h2>Мои ворки:</h2>
            <div className={styles.worksSection}>

                <Link href='#' className={styles.link}>
                    <div>
                        {plusIcon}
                    </div>
                    <p>Создать ворк</p>
                </Link>
                {works.map(item => (
                    <MyWork key={item} />
                ))}
            </div>
        </section>
    )
}