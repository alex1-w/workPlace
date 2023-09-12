import styles from './Navigation.module.scss'
import Link from 'next/link'
import React from 'react'


const links = [
    {
        href: '/',
        name: 'Биржа'
    },
    {
        href: '/',
        name: 'Ворки'
    },
    {
        href: '/',
        name: 'Конкурсы'
    },
    {
        href: '/',
        name: 'Создать ворк'
    },
    {
        href: '/',
        name: 'Создать заказ'
    },
]


export default function Navigation() {
    return (
        <nav className={styles.main}>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <Link href={link.href}>
                            <p>{link.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
