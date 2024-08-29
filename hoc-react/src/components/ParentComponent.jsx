import React from 'react'
import withLoading from './withLoading'
import CBComponent from './CBComponent'

function ParentComponent() {
    const Result = withLoading(CBComponent)
    return (
        <div>
            <Result name = {'Welcome Albin'} />
        </div>
    )
}

export default ParentComponent