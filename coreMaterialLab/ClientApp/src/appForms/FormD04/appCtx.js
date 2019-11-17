import React from 'react'
import { FormDataProvider } from '../../Hooks/useFormdData'
import AppForm from './AppForm'

const initialState = {
    myName: 'nobody'
}

export default function appCtx() {
    return (
        <FormDataProvider initialState={initialState}>
            <AppForm />
        </FormDataProvider>
    )
}
