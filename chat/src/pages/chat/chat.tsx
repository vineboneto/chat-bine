import { useEffect, useState } from 'react'
import ChatMessage from '../../components/chat-message'
import { useChatContext } from '../../context/'
import { Container } from './styles'

export default function Chat() {
  const { username, socket } = useChatContext()

  const [message, setMessage] = useState('')
  const [allMessage, setAllMessage] = useState([])
  const loadAllOldMessages = (messages) => {
    setAllMessage(messages)
  }

  useEffect(() => {
    socket.emit(
      'connect_user',
      {
        username,
      },
      loadAllOldMessages
    )
    return () => {
      socket.emit(
        'connect_user',
        {
          username,
        },
        loadAllOldMessages
      )
    }
  }, [socket, username])

  const senMessage = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      socket.emit('message', {
        username,
        message,
      })

      setMessage('')

      e.stopPropagation()
    }
  }

  socket.on('message', (data) => {
    setAllMessage([...allMessage, data])
  })

  return (
    <Container>
      <div className="chat">
        <div id="messages">
          {allMessage?.map((e, index) => (
            <ChatMessage createdAt={e.createdAt} text={e.text} username={e.username} key={index} />
          ))}
        </div>
        <input
          type="text"
          placeholder={`Escreva uma mensagem ${username}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message_input"
          onKeyDown={senMessage}
        />
      </div>
    </Container>
  )
}
