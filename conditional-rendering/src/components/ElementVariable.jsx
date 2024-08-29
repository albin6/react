import { useState, useEffect } from "react";

function ElementVariable() {
    let msg
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        setIsLogged(true)
    }, [])
    if (isLogged) {
        msg = <h2>User Logged in</h2>
    } else {
        msg = <h2>User not Logged in</h2>
    }
    return (
        <div style={{ border: "1px solid white", padding: "0 20px", margin: "10px" }}>
            <h4>Using Element Variable</h4>
            {msg}
        </div>
    )
    // return (
    //     <div>
    //         <h2>User Logged in</h2>
    //         <h2>User not Logged in</h2>
    //     </div>
    // )
}

export default ElementVariable