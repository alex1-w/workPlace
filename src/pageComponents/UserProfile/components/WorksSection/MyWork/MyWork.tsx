import styles from './MyWork.module.scss'
import Image from 'next/image'
import siteImg from '@/icons/site.png'
import Link from 'next/link'

export const MyWork = () => {

    return (
        <Link className={styles.main} href='/work'>
            <div>
                <Image src={siteImg} alt='siteImg' fill />
            </div>
            <div>
                <p>Дизайн сайта</p>
                <p>50000 тенге</p>
            </div>
        </Link>
    )
}