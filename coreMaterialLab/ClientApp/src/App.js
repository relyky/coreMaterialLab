import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import { Home } from './appForms/Home'
import { FetchData } from './appForms/FetchData'
import { Counter } from './appForms/Counter'
import Form000 from './appForms/Form000/AppForm'
import FormA01 from './appForms/FormA01/AppForm'
import FormB02 from './appForms/FormB02/AppForm'
import FormC03 from './appForms/FormC03/AppForm'
import FormD04 from './appForms/FormD04/appCtx'
import FormE05 from './appForms/FormE05/AppForm'

export default function App(props) {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/Form000' component={Form000} />
                <Route path='/FormA01' component={FormA01} />
                <Route path='/FormB02' component={FormB02} />
                <Route path='/FormC03' component={FormC03} />
                <Route path='/FormD04' component={FormD04} />
                <Route path='/FormE05' component={FormE05} />
            </Switch>
        </Layout>
    )
}

