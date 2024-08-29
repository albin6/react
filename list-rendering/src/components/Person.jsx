import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h4 key={person.id}>{person.name}</h4>
        </div>
    )
}

export default Person