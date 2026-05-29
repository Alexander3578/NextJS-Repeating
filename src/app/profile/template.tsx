'use client'

import React, {useEffect} from 'react';

export default function NestedLayout ({children} : {children: React.ReactNode}) {

    useEffect(() => {
        alert("Layout mounted!")
    }, [])

    return (
        <div>
            <h2>Profile layout</h2>
            {children}
        </div>
    );
};

