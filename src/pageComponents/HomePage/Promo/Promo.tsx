import styles from './Promo.module.scss'
import Image from 'next/image'
import React from 'react'
import promoImage from '@/icons/promo.png'
import Link from 'next/link'
import { Field } from '@/components/UI/Field/Field'
import { Tag } from './Tag/Tag'

export const tags = [
    {
        name: 'Тексты и переводы'
    },
    {
        name: 'Разработка'
    },
    {
        name: 'Дизайн'
    },
    {
        name: 'Аудио, видео монтаж'
    },
    {
        name: 'SEO оптимизация'
    },
    {
        name: 'Бизнес и жизнь'
    },
    {
        name: 'Соцсети и реклама'
    },
]

export default function Promo() {
    return (
        <section className={styles.main}>

            <div className={styles.textContent}>
                <div>
                    <h1>
                        Покупайте фриланс-услуги в&nbsp;
                        <span>
                            <Link href='/'>два клика</Link>
                        </span>
                    </h1>
                    <div className={styles.textContent__subTitle}>
                        <h2>
                            Ворк — единица работы продавца, которую можно купить как товар в магазине
                        </h2>
                    </div>

                </div>

                <div className={styles.searchBlock}>
                    <Field type='text' placeholder='Что нужно сделать?' />
                    <p>Выберите рубрику чтобы начать</p>

                    <div className={styles.tagsBlock}>
                        {tags.map(tag => (
                            <Tag name={tag.name} key={tag.name} />
                        ))}
                        <Link href='/' >
                            <p>Все категории</p>
                        </Link>
                    </div>
                </div>

            </div>


            <div className={styles.imgBlock}>
                <Image alt='d' src={promoImage} />
            </div>

        </section>
    )
}
