import styles from './Authorizations.module.scss'
import Link from 'next/link'
import React from 'react'

export default function Authorizations() {
    return (
        <div className={styles.main}>
            <Link href='/'>
                <p>Регистрация</p>
                </Link>
            <Link href='/'>
                <p>Войти</p>
                </Link>
        </div>
    )
}
