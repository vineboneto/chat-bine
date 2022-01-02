import { createContext, ReactNode, useContext } from 'react'
import io, { Socket } from 'socket.io-client'

type ContextProps = {
  getUsername: () => string
  setUsername: (username: string) => void
  socket: Socket
}

const ChatContext = createContext<ContextProps>(null)

type Props = {
  children: ReactNode
}

export function ChatContextProvider({ children }: Props) {
  const socket = io(process.env.REACT_APP_NODE_SERVER, {
    transports: ['websocket', 'polling', 'flashsocket'],
  })

  const setStorageUserName = (username: string) => {
    localStorage.setItem('chat.bine.username', JSON.stringify(username))
  }

  const getStorageUserName = () => {
    const username = JSON.parse(localStorage.getItem('chat.bine.username'))
    return username
  }

  return (
    <ChatContext.Provider value={{ getUsername: getStorageUserName, setUsername: setStorageUserName, socket }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  const context = useContext(ChatContext)
  return context
}
