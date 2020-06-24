import echoF from 'echoM'
import React from 'react'
import ReactDOM from 'react-dom'

const App= ()=>{
    echoF('just here');
    return <div></div>
}

ReactDOM.render(<App/>,document.getElementById('root'))