import styles from './Logo.module.scss'

import { logoIcon } from '@/icons/icons'
import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href='/'>{logoIcon}</Link>
    )
}
