import React, { Fragment } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

import useAxios from 'axios-hooks'

//-----------------------------------------------
// widget
function ForecastsTable({ forecasts }) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

//-----------------------------------------------------

export default function DataLister() {
    const [{ data, loading, error }, refetch] = useAxios('api/SampleData/WeatherForecasts')

    if (loading) return <p>Loading...</p>

    if (error) {
        console.error('error', error)
        return (
            <div>
                <h4>Error!</h4>
                <pre>{JSON.stringify(error, null, '  ')}</pre>
            </div>
        )
    }

    return (
        <Fragment>
            <button onClick={refetch}>refetch</button>
            <ForecastsTable forecasts={data} />
        </Fragment>
    )
}
