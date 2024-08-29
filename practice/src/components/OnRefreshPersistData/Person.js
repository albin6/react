import React from 'react';

function Person({ users }) {
    return (
        <div>
            {users.map(user => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </div>
    );
}

export default Person;
