import React, { Fragment } from 'react'
import FormTitle from '../../Layouts/FormTitle'
import DataView01 from './DataView01'

export default function AppForm() {
    return (
        <Fragment>
            <FormTitle title={'這是FormE05的抬頭'} />
            <DataView01 />
            {/*
            <DataView02 />
            <DataView03 />
            <DataView04 />
            <DataView05 />*/}
        </Fragment>
    )
}
