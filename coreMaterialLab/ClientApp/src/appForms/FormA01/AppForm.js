import React, { Component } from 'react';

const APP_TITLE = 'FormA01'

export default class AppForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{APP_TITLE}</h1>
            </div>
        )
    }
}
