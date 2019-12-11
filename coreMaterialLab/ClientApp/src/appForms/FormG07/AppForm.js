import React, { Fragment, useState, useCallback } from 'react'
import Parent from './Parent'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const APP_TITLE = 'FormG07'
const APP_DESCRIPTION = 'useMemo & useCallback'

export default function AppForm() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    function incrementAge() {
        setAge(age + 1)
    }

    function incrementSalary() {
        setSalary(salary + 1000)
    }

    const incrementAgeCallback = useCallback(() => {
        incrementAge()
    },[age])

    const incrementSalaryCallback = useCallback(() => {
        incrementSalary()
    }, [salary])

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <p>請案【F12】開啟console查看Log中，是否有進行expensive calculations。</p>

            <Title />
            <Count text='Age' count={age} />
            <Button onClick={incrementAgeCallback}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button onClick={incrementSalaryCallback}>Increment Salary</Button>

        </Fragment>
    )
}
