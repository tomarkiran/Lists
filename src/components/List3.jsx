import React from 'react'

const Listtt =({itemss})=>{
    return(
        <div>
            {itemss.map((item2, index)=>(
                <li key={index}>{item2}</li>
            ))}
        </div>
    )
}

export default Listtt;