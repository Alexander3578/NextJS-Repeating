import React from 'react';
import styles from '../page.module.css'
import Image from 'next/image';


export default function ImagePage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image src='https://it-incubator.io/' alt={'Sources image'} width={300} height={300}/>
            </main>
        </div>
    );
};

