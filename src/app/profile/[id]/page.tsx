'use client'

import React from 'react';
import {useParams, useSearchParams} from 'next/navigation';
import styles from '../../page.module.css'

export default function Page (){

    const param = useParams()
    const searchParam = useSearchParams()

    return (
        <div className={styles.page}>
            Profile {param.id}
            search: {searchParam.get('title')}
        </div>
    );
};

