import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import { Home } from './appForms/Home'
import { FetchData } from './appForms/FetchData'
import { Counter } from './appForms/Counter'
import Form000 from './appForms/Form000/appCtx'
import FormA01 from './appForms/FormA01/AppForm'
import FormA02 from './appForms/FormA02/appCtx'
import FormB02 from './appForms/FormB02/AppForm'
import FormC03 from './appForms/FormC03/AppForm'
import FormC04 from './appForms/FormC04/appCtx'
import FormD04 from './appForms/FormD04/appCtx'
import FormE05 from './appForms/FormE05/appCtx'
import FormF06 from './appForms/FormF06/appCtx'
import FormG07 from './appForms/FormG07/appCtx'
import FormH08 from './appForms/FormH08/appCtx'
import FormS09 from './appForms/FormS09/appCtx'
import FormS10 from './appForms/FormS10/appCtx'
import FormJ10 from './appForms/FormJ10/appCtx'
import FormZ88 from './appForms/FormZ88/appCtx'
import FormZ90 from './appForms/FormZ90/appCtx'
import FormZ91 from './appForms/FormZ91/appCtx'
import { AppInfoProvider } from './Hooks/useAppInfo' 

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
                    <Route path='/FormA02' component={FormA02} />
                    <Route path='/FormB02' component={FormB02} />
                    <Route path='/FormC03' component={FormC03} />
                    <Route path='/FormC04' component={FormC04} />
                    <Route path='/FormD04' component={FormD04} />
                    <Route path='/FormE05' component={FormE05} />
                    <Route path='/FormF06' component={FormF06} />
                    <Route path='/FormG07' component={FormG07} />
                    <Route path='/FormH08' component={FormH08} />
                    <Route path='/FormS09' component={FormS09} />
                    <Route path='/FormS10' component={FormS10} />
                    <Route path='/FormJ10' component={FormJ10} />
                    <Route path='/FormZ88' component={FormZ88} />
                    <Route path='/FormZ90' component={FormZ90} />
                    <Route path='/FormZ91' component={FormZ91} />
                </Switch>
            </Layout>
        </AppInfoProvider>
    )
}

