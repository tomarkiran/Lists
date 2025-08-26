import React from 'react'
import './App.css'
import List from './components/List'
import List2 from './components/List2'
import List3 from './components/List3'


function App() {
  const nums =["aa", "bb", "cc", "dd", "ee"]
  const nums2 = ["ff", "gg", "hh", "ii", "jj", "kk"]
  const nums3 = ["qq", "ww"]

  return (
    
      <div>
        <h1>My fruit List:</h1><List/>
        <h1>Nums:</h1><List2 items={nums}/>
       <h1>Nums2</h1> <List2 items={nums2}/>
       <h2>Nums3:</h2><List3 items2={nums3}/>
       </div>
    )
}

export default App
