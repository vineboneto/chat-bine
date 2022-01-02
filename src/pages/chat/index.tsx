import { useCallback, useEffect, useState } from 'react'
import ChatMessage from '@/components/chat-message'
import { useChatContext } from '@/context/'
import { Container } from './styles'

export default function Chat() {
  const { getUsername, socket } = useChatContext()

  const [message, setMessage] = useState('')
  const [allMessage, setAllMessage] = useState([])

  const loadAllOldMessages = (messages) => {
    setAllMessage(messages)
  }

  const connectUser = useCallback(() => {
    socket.emit(
      'connect_user',
      {
        username: getUsername(),
      },
      loadAllOldMessages
    )
  }, [getUsername, socket])

  useEffect(() => {
    connectUser()
    return () => connectUser()
  }, [connectUser])

  const senMessage = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      socket.emit('message', {
        username: getUsername(),
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
          placeholder={`Escreva uma mensagem ${getUsername()}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message_input"
          onKeyDown={senMessage}
        />
      </div>
    </Container>
  )
}
