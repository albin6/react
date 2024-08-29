import React, { useEffect, useState } from 'react'

function withLoading(WrappedComponent) {
  return  function withLoadingComponent(props) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    })
    if (!loading) {
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    return (
        <div>
            <WrappedComponent {...props} />
        </div>
    )
  }
}

export default withLoading