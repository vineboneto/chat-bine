import { createContext, ReactNode, useContext, useState } from 'react'
import io, { Socket } from 'socket.io-client'

type ContextProps = {
  username: string
  setUsername: (username: string) => void
  socket: Socket
}

const ChatContext = createContext<ContextProps>(null)

type Props = {
  children: ReactNode
}

export function ChatContextProvider({ children }: Props) {
  console.log(process.env.REACT_APP_NODE_SERVER)
  const socket = io(process.env.REACT_APP_NODE_SERVER)

  const [username, setUsername] = useState('')

  return <ChatContext.Provider value={{ username, setUsername, socket }}>{children}</ChatContext.Provider>
}

export function useChatContext() {
  const context = useContext(ChatContext)
  return context
}
