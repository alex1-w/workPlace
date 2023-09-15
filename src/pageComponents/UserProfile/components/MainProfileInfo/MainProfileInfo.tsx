import styles from './MainProfileInfo.module.scss'
import LinkButton from '@/components/UI/LinkButton/LinkButton'
import { freelancers } from '@/links/links.data'
import Image from 'next/image'
import { DetailedInfoComponent } from './DetailedInfoComponent/DetailedInfoComponent'

const profileInfo = freelancers[0]

const userStack = [
    {
        name: 'HTML/CSS',
    },
    {
        name: 'Adobe After Effects',
    },
    {
        name: 'Corel draw',
    },
    {
        name: 'Corel draw',
    },
    {
        name: 'Adobe illustrator',
    },
    {
        name: 'HTML/CSS',
    }
]

export const MainProfileInfo = () => {
    return (
        <section className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.infoContent}>

                    <h1>{profileInfo.profession}</h1>
                    <h2>{profileInfo.name}</h2>

                    <div className={styles.infoContent__description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Labore nulla quidem laborum veritatis, eaque unde quaerat doloribus itaque,
                            quasi officiis omnis harum minima fuga magni inventore, temporibus odit
                            libero eveniet.
                        </p>
                    </div>

                    <div className={styles.infoContent__stack}>
                        {userStack.map(item => (
                            <LinkButton
                                link='#'
                                name={item.name}
                                styleVariant='tagLink'
                                key={item.name} />
                        ))}
                    </div>

                    <DetailedInfoComponent />

                </div>

                <div className={styles.imgBlock}>
                    <Image alt='profile' src={profileInfo.img} />
                </div>
            </div>
        </section>
    )
}