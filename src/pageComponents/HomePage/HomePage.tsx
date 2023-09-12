import styles from './HomePage.module.scss'
import React from 'react'
import Promo from './Promo/Promo'
import { Container } from '@/components/Container/Container'


export default function HomePage() {
    return (
        <Container>

            <main className={styles.main}>

                <Promo />
            </main>


        </Container>
    )
}
