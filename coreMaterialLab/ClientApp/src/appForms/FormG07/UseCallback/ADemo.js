import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

export default function ADemo() {
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
        <div style={{ borderStyle: 'solid', borderWidth: 1, padding: '0.5em' }}>
            <Title />
            <Count text='Age' count={age} />
            <Button onClick={incrementAgeCallback}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button onClick={incrementSalaryCallback}>Increment Salary</Button>
        </div>
    )
}
