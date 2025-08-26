import React from 'react'

const List3 =({items2})=>{
    return(
        <div>
            {items2.map((item2, index)=>(
                <li key={index}>{item2}</li>
            ))}
        </div>
    )
}

export default List3;