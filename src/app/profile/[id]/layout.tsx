
import React from 'react';

export default function NestedLayout ({children} : {children: React.ReactNode}){

    return (
        <div>
            <h2>Profile/id Layout</h2>
            {children}
        </div>
    );
};

