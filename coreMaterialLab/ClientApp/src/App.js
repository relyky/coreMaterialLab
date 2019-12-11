import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import { Home } from './appForms/Home'
import { FetchData } from './appForms/FetchData'
import { Counter } from './appForms/Counter'
import Form000 from './appForms/Form000/appCtx'
import FormA01 from './appForms/FormA01/AppForm'
import FormB02 from './appForms/FormB02/AppForm'
import FormC03 from './appForms/FormC03/AppForm'
import FormD04 from './appForms/FormD04/appCtx'
import FormE05 from './appForms/FormE05/appCtx'
import FormF06 from './appForms/FormF06/appCtx'
import FormG07 from './appForms/FormG07/appCtx'
import FormH08 from './appForms/FormH08/appCtx'
import { AppInfoProvider } from './Hooks/useAppInfo';

export default function App(props) {
    const [appInfo] = useState({
        userId: 'USER_ID',
        userName: 'USER_NAME'
    })

    return (
        <AppInfoProvider appInfo={appInfo}>
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
                    <Route path='/FormF06' component={FormF06} />
                    <Route path='/FormG07' component={FormG07} />
                    <Route path='/FormH08' component={FormH08} />
                </Switch>
            </Layout>
        </AppInfoProvider>
    )
}

