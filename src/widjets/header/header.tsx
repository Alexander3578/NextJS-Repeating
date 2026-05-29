'use client'

import styles from './header.module.css'
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {useCallback} from 'react';

export const Header = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const createQueryString = useCallback((title: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(title, value)

        return params.toString()
    }, [searchParams])

    return (
        <nav className={styles.navigation}>
            <button onClick={() => {
                router.push(pathName + '?' + createQueryString('title', 'newName'))
            }}>
                title
            </button>
            <ul>
                <li>
                    <button onClick={() => router.back()} className={styles.link}>
                        Back
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push('/books')} className={styles.link}>
                        Books
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push('/')} className={styles.link}>
                        Main
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push('/profile')} className={styles.link}>
                        Profile
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push('/images')} className={styles.link}>
                        Image
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push('/profile/123')} className={styles.link}>
                        Profile 123
                    </button>
                </li>
                <li>
                    <button onClick={() => router.forward()} className={styles.link}>
                        Forward
                    </button>
                </li>
            </ul>
        </nav>
    )
}

