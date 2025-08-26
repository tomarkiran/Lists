import React from 'react'

const List2 = ({items}) => {
    return(
        <ul>
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))} 
        </ul>
    )
}
export default List2