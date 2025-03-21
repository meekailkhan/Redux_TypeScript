import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { ordered,restored } from './cakeSlice'


function CakeView() {
  const numOfCake = useAppSelector((state)=> state.cake.numOfCake)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Cake - {numOfCake}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Cake</button>
      <button onClick={()=> dispatch(restored(5))}>Restocked Cake</button>
    </div>
  )
}

export default CakeView
