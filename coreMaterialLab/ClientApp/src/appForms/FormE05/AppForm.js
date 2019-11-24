import React, { Fragment } from 'react'
import FormTitle from '../../Layouts/FormTitle'
import TodoList from './TodoList'

export default function AppForm() {


    return (
        <Fragment>
            <FormTitle title={'這是FormE05的抬頭'} />
            <TodoList />
        </Fragment>
    )
}
