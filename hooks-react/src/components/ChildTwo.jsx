import React, { useContext } from 'react'
import MyContext from './MyContext'

function ChildTwo() {
    const userInfo = useContext(MyContext)
    return (
        <div>
            ChildTwo
            <br />
            <h2>{userInfo.userName}</h2>
            {
                userInfo.isLoggedin ? <h2>Welcome {userInfo.userName}</h2> : <h2>Please login</h2>
            }
        </div>
    )
}

export default ChildTwo