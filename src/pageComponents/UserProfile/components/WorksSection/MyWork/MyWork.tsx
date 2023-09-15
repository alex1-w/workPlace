import styles from './MyWork.module.scss'
import Image from 'next/image'
import siteImg from '@/icons/site.png'

export const MyWork = () => {

    return (
        <div className={styles.main}>
            <div>
                <Image src={siteImg} alt='siteImg' fill />
            </div>
            <div>
                <p>Дизайн сайта</p>
                <p>50000 тенге</p>
            </div>
        </div>
    )
}