
import React from 'react'

export const Card = ({img,header,text}) => {
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <h1>
                {header}
            </h1>
            <p>
                {text}
            </p>
        </div>
    )
}
