import React from 'react'
import { FormDataProvider } from '../../Hooks/useFormdData'
import AppForm, { initialFormData } from './AppForm'

export default function appCtx() {
    return (
        <FormDataProvider initialState={initialFormData}>
            <AppForm />
        </FormDataProvider>
    )
}
