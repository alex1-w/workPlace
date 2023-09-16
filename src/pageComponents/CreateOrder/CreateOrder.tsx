'use client'
import styles from './CreateOrder.module.scss';
import { FC } from "react"
import { Container } from '@/components/Container/Container';
import { Field } from '@/components/UI/Field/Field';
import SelectsBlock from './components/SelectsBlock/SelectsBlock';
import LinkButton from '@/components/UI/LinkButton/LinkButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CreateOrder: FC = () => {
    // const navigate = useRouter()

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.wrapper}>

                    <h1>Опубликуйте ваш заказ</h1>
                    <div className={styles.formItem}>
                        <p>Название:</p>
                        <Field placeholder='title' type='text' variant='formVariant' />
                    </div>

                    <div className={styles.formItem}>
                        <p>Описание:</p>
                        <textarea name="" id="" cols={40} rows={10} placeholder='кратко опишите свой ворк' />
                    </div>

                    <SelectsBlock />

                    <div>
                        <p>Бюджет в тенге</p>
                        <Field placeholder='0' type='number' variant='formVariant' />
                    </div>

                    <div className={styles.btnsBlock}>
                        {/* <button onClick={() =>{ navigate.push('/')}}></button> */}
                        <Link href='/' ><p>На главную</p></Link>

                        <button><p>Опубликовать</p></button>
                    </div>
                </div>
            </Container>
        </main >
    )
};

export default CreateOrder;
