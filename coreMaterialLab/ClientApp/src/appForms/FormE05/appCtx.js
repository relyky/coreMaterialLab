import React from 'react'
import { FormDataProvider } from '../../Hooks/useFormdData'
import AppForm from './AppForm'

export default function appCtx() {
    return (
        <FormDataProvider>
            <AppForm />
        </FormDataProvider>
    )
}