import React, { Fragment, useRef } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

import Entity from './Entity'

const APP_TITLE = 'FormZ88 交易'
const APP_DESCRIPTION = '交易'

export default function AppForm() {
    const people = useRef()
    const food = useRef()

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <Entity label="人口"
                ref={people}
                aimRef={food}

            />

            <Entity label="食物"
                ref={food}

            />

        </Fragment>
    )
}
