import React, { Component } from 'react'
import { Route } from 'react-router'
import Layout from './components/Layout'
import { Home } from './appForms/Home'
import { FetchData } from './appForms/FetchData'
import { Counter } from './appForms/Counter'
import FormA01 from './appForms/FormA01/AppForm'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/FormA01' component={FormA01} />
            </Layout>
        )
    }
}
