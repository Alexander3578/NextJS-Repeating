'use client';

import styles from '../../page.module.css'
import {useParams} from 'next/navigation';

export default function Page() {

    const param = useParams()

    return (
        <div className={styles.page}>
            {param.id} Page
        </div>
    );
};

