import React from 'react'
import SuperInputText from '../common/c1-SuperInputText/SuperInputText'
import SuperButton from '../common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../common/c3-SuperCheckbox/SuperCheckbox'
import s from './Preview.module.css'

const Preview = () => {
    return (
        <div>
            <SuperButton> button </SuperButton>
            <SuperInputText />
            <SuperCheckbox />
        </div>
    )
}

export default Preview