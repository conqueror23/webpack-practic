import React from 'react'
import Counter from './Counter'


const Hero = () => {
    return (
        <div className="tradingcup-warpper">
            <div className="tradingcup-veil section-content-wrapper">
                <div className="tradingcup-content-wrapper">
                    <p className="sub">2020 Trading Cup</p>
                    <h1> <span>$US <span><Counter number={15000}/></span></span> Total Price Pool Given Away*</h1>
                    <ul>
                        <li>
                            Six $US10,000 Monthly Qualifying Stages
                    </li>
                        <li>
                            $US90,000 up for grabs in the grand final
                    </li>
                        <li>
                            The Grand Champion gets $US63,000
                    </li>
                    </ul>
                    <a href="#how-to" className='enter-button'>How To Enter <span>&#8595;</span> </a>
                    <p>*Trading involves risk. T&Cs apply.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
