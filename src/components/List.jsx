import React from 'react'

const List =()=>{
    const fruits =[
        {id:1, name:"Apple"},
        {id:2, name:"Banana"},
        {id:3, name: "Mango"},
        {id:4, name:"Orange"},
    ]
    return(
           <div>
            <h2>Fruits List:</h2>
            <ul>
                {fruits.map(fruit=>(
                    <li key={fruit.id}>{fruit.name}</li>
                ))}
            </ul>
           </div>
    )
}

export default List;