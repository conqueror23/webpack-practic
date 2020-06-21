import React from 'react'
import {CountUp} from 'countup.js'
interface Props {
   number:number 
}

const Counter = (props: Props) => {
    console.log('the method here',CountUp)
    return (
        <div>
        </div>
    )
}

export default Counter
