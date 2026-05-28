"use client"

import styles from "./header.module.css"
import {useRouter} from 'next/navigation';

export const Header = () => {

    const router = useRouter();
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <button onClick={() => router.back()} className={styles.link}>
                        Back
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push("/")} className={styles.link}>
                        Main
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push("/profile")} className={styles.link}>
                        Profile
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push("/images")} className={styles.link}>
                        Image
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push("/profile/123")} className={styles.link}>
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

