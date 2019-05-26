import React from 'react'
import './scss/Steps.scss'

const Steps = ({ elements, activeElement }) => {

    const content = elements.map((element, index) => (
        <li key={index} className={activeElement === index ? 'active' : ''}>
            <span className="index">
                { index + 1 }
            </span>
            <span className="label">
                {element.label}
            </span>
        </li>
        ))

    return (
        <ul className="stepsComponent">
            { content }
        </ul>
    )
}

export default Steps
