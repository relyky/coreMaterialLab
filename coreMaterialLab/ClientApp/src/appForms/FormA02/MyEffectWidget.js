import React, { useEffect, useState } from 'react'
//import t from 'typy'

// resource
const borderStyle = {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '0.5em',
    margin: '0.5em',
    borderRadius: '0.5em'
}

//------------------------------------

export default function MyEffectWidget(props) {
    const [effectCount, setEffectCount] = useState(0)

    useEffect(() => {
        setEffectCount(c => c + 1)
    }, Object.values(props)) // transform props type from object to array

    return (
        <div style={borderStyle}>
            <h5>MyEffectWidget {effectCount}</h5>
            <pre>{JSON.stringify(props, null, ' ')}</pre>
        </div>
    )
}