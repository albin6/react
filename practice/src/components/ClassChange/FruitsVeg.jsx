import React from 'react'

function FruitsVeg({item}) {
  return (
    <div>
        {
            item.map((x, i) => {
                return <h2 key={i} style={{color : `${x === 'banana' ? 'red' : 'blue'}`}}>{x}</h2>
            })
        }
    </div>
  )
}

export default FruitsVeg