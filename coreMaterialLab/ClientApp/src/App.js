import React, { Component } from 'react'
import { Route } from 'react-router'
import Layout from './components/Layout'
import { Home } from './appForms/Home'
import { FetchData } from './appForms/FetchData'
import { Counter } from './appForms/Counter'
import Form000 from './appForms/Form000/AppForm'
import FormA01 from './appForms/FormA01/AppForm'
import FormB02 from './appForms/FormB02/AppForm'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/Form000' component={Form000} />
                <Route path='/FormA01' component={FormA01} />
                <Route path='/FormB02' component={FormB02} />
            </Layout>
        )
    }
}
