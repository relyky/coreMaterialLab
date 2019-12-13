import React, { Fragment, useState, useEffect } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'
import DataLister from './DataLister'

const APP_TITLE = 'useAxios'
const APP_DESCRIPTION = 'useAxios'

export default function AppForm() {

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <DataLister />
        </Fragment>
    )
}
