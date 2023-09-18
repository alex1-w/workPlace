import styles from './Login.module.scss'
import Image from 'next/image'
import authImage from '@/icons/authImage.png'
import { Field } from '@/components/UI/Field/Field'
import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'
import { Button } from '@/components/UI/Button/Button'

export const Login = () => {

    // const

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.formBlock}>
                    <Logo />

                    <form>
                        <p>Добро пожаловать!</p>
                        <h1>Войдите в свой аккаунт</h1>
                        <div className={styles.formBlock__item}>
                            <p>E-mail</p>
                            <Field placeholder='E-mail' type='text' variant='formVariant' />
                        </div>
                        <div className={styles.formBlock__item}>
                            <p>Пароль</p>
                            <Field placeholder='password' type='text' variant='formVariant' />
                        </div>

                        <div className={styles.formBlock__rememberMeBlock}>
                            <div>
                                <input type="checkbox" id='rememberMe' />
                                <label htmlFor="rememberMe">запомнить меня</label>
                            </div>
                            <Link href='/'><p>забыли пароль?</p></Link>
                        </div>

                        <Button name='Войти' type='submit' variant='linkVariant' />

                    </form>
                </div>

                <div className={styles.imgBlock}>
                    <Image alt='authImage' src={authImage} fill />
                </div>

            </div>
        </main>
    )
}
