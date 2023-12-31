import Footer from '@/pageComponents/Footer/Footer'
import Header from '@/pageComponents/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Login Page',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body>
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}
