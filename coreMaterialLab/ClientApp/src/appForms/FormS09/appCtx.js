import React from 'react'
import { FormDataProvider } from '../../Hooks/useFormdData'
import { StoreProvider } from '../../Hooks/useStore'
import AppForm from './AppForm'

export default function appCtx() {
    return (
        <StoreProvider>
            <FormDataProvider>
                <AppForm />
            </FormDataProvider>
        </StoreProvider>
    )
}
