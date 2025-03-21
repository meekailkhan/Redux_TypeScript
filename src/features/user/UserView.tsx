import {React,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserView() {
  const user = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div>
      <h2>User List</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      <ul>
        {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          )
        )}
      </ul>

    </div>
  )
}

export default UserView
