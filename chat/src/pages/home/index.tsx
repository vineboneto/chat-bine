import { FormEvent, useState } from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useChatContext } from '../../context'

export default function Home() {
  const navigate = useNavigate()
  const { setUsername } = useChatContext()
  const [user, setUser] = useState('')
  console.log(process.env.REACT_APP_NODE_SERVER)

  const navigationChat = (e: FormEvent) => {
    e.preventDefault()
    if (!user) return
    setUsername(user)
    navigate('/chat')
  }

  return (
    <Container>
      <form onSubmit={navigationChat}>
        <h1>Chat Do Bine</h1>
        <input
          type="text"
          name="username"
          placeholder="Digite o seu usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}
