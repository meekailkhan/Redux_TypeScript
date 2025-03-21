import { useState } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
import { useAppSelector,useAppDispatch } from '../../app/hooks'

import { ordered,restored } from './iceCreameSlice'

function IceCreameView() {
  const [value,setValue] = useState<number>(0)
  const numOfIceCreame = useAppSelector((state)=> state.iceCreame.numOfIceCreame)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number Of Ice Creame - {numOfIceCreame}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Ice Creame</button>
      <input type="number" value={value} onChange={(e)=> setValue(+e.target.value)} placeholder='Enter Restocked Value'/>
      <button onClick={()=> dispatch(restored(value))}>Restocked Ice Creame</button>
    </div>
  )
}

export default IceCreameView
