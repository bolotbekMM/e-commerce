import React, { useState } from 'react'
import './Adding.css'
import { promoBooks } from './constants'

// const Addding = () => {
//     const [cards, setCards] = useState([...promoBooks])
//     const [count, setCount] = useState(0)

//     const addListHandler=()=> {
//         setCount((count)=> count + 2)
//     }
//   return (
//     <div style={{width: "800px"}}>
//         {
//             cards.length !== 0 && cards.slice(0,count).map((item, index) => {
//                 return <img className='image' src={item.url} alt=""/>
//             })
//         }
//         <button onClick={addListHandler}>Еще!</button>
//     </div>
//   )
// }

// export default Addding

const Addding = () => {
    const [cards, setCards] = useState([...promoBooks])
    const [count, setCount] = useState(8)

    const addListHandler=()=> {
        setCount((count)=> count + 4)
    }
  return (
    <div style={{width: "800px"}}>
        {
            cards.length !== 0 && cards.slice(0,count).map((item, index) => {
                return <img className='image' src={item.url} alt=""/>
            })
        }
        <button onClick={addListHandler}>Еще!</button>
    </div>
  )
}

export default Addding