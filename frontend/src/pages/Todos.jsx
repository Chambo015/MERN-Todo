import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function Todos() {
  const navigate =  useNavigate()
  const [loggedUser] = useLocalStorage('user')
  useEffect(() => {
    console.log(loggedUser);
    if(!loggedUser) navigate('/login')
  }, [loggedUser, navigate])
  return (
    <div >Todos</div>
  )
}