import styles from './Package.module.scss'
import { FC } from 'react'
import FieldBlock from '@/components/UI/FieldBlock/FieldBlock'
import { TextArea } from '@/components/UI/TextArea/TextArea'
import CardWrapper from '@/components/CardWrapper/CardWrapper'


export const Package: FC<{ title: string }> = ({ title }) => {
    return (
        <CardWrapper>


            <div className={styles.main}>
                <h4>{title}</h4>

                <div className={styles.description}>
                    <p>Описание пакета</p>
                    <TextArea
                        cols={22}
                        rows={4}
                        placeholder=''
                    />
                </div>


                <FieldBlock
                    name='timeFrame'
                    placeholder=''
                    title='Сроки выполнения'
                    type='text'
                />
                <FieldBlock
                    name='countMods'
                    placeholder=''
                    title='Количество доработок'
                    type='text'
                />
                <FieldBlock
                    name='price'
                    placeholder=''
                    title='Стоимость'
                    type='number'
                />
            </div>

        </CardWrapper>
    )
}
