import { Field } from '@/components/UI/Field/Field';
import styles from './StockSearch.module.scss';
import { FC } from "react"

export const jobLinks = [
    {
        title: 'Тексты и переводы ',
        link: '/',
    },
    {
        title: 'Разработка',
        link: '/',
    },
    {
        title: 'Дизайн',
        link: '/',
    },
    {
        title: 'Аудио, видео монтаж ',
        link: '/',
    },
    {
        title: 'SEO и оптимизация',
        link: '/',
    },
    {
        title: 'Бизнес и жизнь',
        link: '/',
    },
    {
        title: 'Соцсети и реклама',
        link: '/',
    },
]

const StockSearch: FC = () => {
    return (
        <section className={styles.main}>
            <div>
                <h1>Ищите и находите подходящую работу среди <span>10,000+</span> проектов и покажите на что Вы способны!</h1>
            </div>
            <div className={styles.searchBlock}>

                <Field placeholder='Какую работу ищете?' type='text' />
                <div>
                    {/* {jobLinks.map(item => (
                        
                    ))} */}
                </div>

            </div>
        </section>
    )
};

export default StockSearch;
