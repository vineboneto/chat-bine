import Routes from './routes'
import { GlobalStyles } from './styles/global-styles'
import { ChatContextProvider } from './context'

export default function App() {
  return (
    <ChatContextProvider>
      <Routes />
      <GlobalStyles />
    </ChatContextProvider>
  )
}
