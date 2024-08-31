import './layer.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../store/Context'

function LayerTwo() {
    const { theme, ToggleTheme } = useContext(ThemeContext)
    return (
        <div className='l-two' onClick={ToggleTheme} style={{ background: theme === 'light' ? '#000' : '#fff', color: theme === 'light' ? '#fff' : '#000' }}>LayerTwo</div>
    )
}

export default LayerTwo