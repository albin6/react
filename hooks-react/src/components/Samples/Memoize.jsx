import React, { useMemo } from 'react';

function Memoize({ skills }) {
    const results = useMemo(() => {
        console.log('sorting list');
        return [...skills].sort();
    }, [skills]);

    return (
        <div>
            {results.map((skill, index) => (
                <h2 key={index}>{skill}</h2>
            ))}
        </div>
    );
}

export default Memoize;
