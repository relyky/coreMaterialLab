import React, { Fragment, useState } from 'react'
import FormTitle from '../../Layouts/FormTitle'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import useFormData from '../../Hooks/useFormdData'

export default function AppForm() {
    const [formData, { assignValue, assignProps }] = useFormData()

    // 等同建構式(constructor)
    useState(() => {
        assignProps({
            itemList: [
                { desc: '早上七點吃早餐' },
                { desc: '中午十二點吃午餐' },
                { desc: '下午三點喝奶茶' },
                { desc: '晚上六點吃晚餐' },
                { desc: '晚上十點吃宵夜' },
            ]
        })
    })

    return (
        <Fragment>
            <FormTitle title={'Simple TodoList'} />
            <TodoAdd />
            <TodoList />
        </Fragment>
    )
}
